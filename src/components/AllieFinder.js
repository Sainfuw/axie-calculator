import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { getOwnerAxies } from "../api/queries";
import { AxieContext } from "../context/AxieContext";
import { AxieFinder } from "./AxieFinder";

export const AllieFinder = () => {
  const [allieAxieId, setAllieAxieId] = useState("");
  const { addAllieOne, fillOtherAllies } = useContext(AxieContext);
  const [show, setShow] = useState(false);
  const [axiesArray, setAxiesArray] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleSave = () => {
    fillOtherAllies(selected);
    setShow(false);
  };

  const handleAllieChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setAllieAxieId(value);
  };

  const handleGetAllieAxie = async () => {
    const res = await addAllieOne(allieAxieId);
    res && getAllieAxies(res.owner, res.id);
  };

  const getAllieAxies = async (ownerId, id) => {
    const res = await getOwnerAxies(ownerId);
    const axies = res
      .filter((axie) => axie.id !== id)
      .sort((a, b) => {
        return b.id > a.id;
      });

    setAxiesArray(axies);

    if (axies.length === 2) {
      fillOtherAllies(axies.map((axie) => axie.id));
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="axie-options">
        <button className="btn btn-success mx-2" onClick={handleGetAllieAxie}>
          MyID
        </button>
        <input
          type="text"
          className="form-control"
          value={allieAxieId}
          onChange={handleAllieChange}
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName="axie-finder-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Two Axies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AxieFinder
            axiesArray={axiesArray}
            selected={selected}
            setSelected={setSelected}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
