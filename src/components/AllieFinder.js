import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { getOwnerAxies } from "../api/queries";
import { AxieContext } from "../context/AxieContext";

export const AllieFinder = () => {
  const [allieAxieId, setAllieAxieId] = useState("");
  const { addAllieOne, fillOtherAllies } = useContext(AxieContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

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
    const axiesArray = res.filter((axie) => axie.id !== id);
    if (axiesArray.length === 2) {
      fillOtherAllies(axiesArray.map((axie) => axie.id));
    } else {
      setShow(true);
    }
    console.log(axiesArray);
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Allied!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
