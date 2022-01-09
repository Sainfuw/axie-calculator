import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";

import { getOwnerAxies } from "../api/queries";
import { AxieContext } from "../context/AxieContext";
import { AxieFinder } from "./AxieFinder";

export const EnemyFinder = () => {
  const [enemyAxieId, setEnemyAxieId] = useState("");
  const { addEnemieOne, fillOtherEnemies } = useContext(AxieContext);
  const [show, setShow] = useState(false);
  const [axiesArray, setAxiesArray] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleSave = () => {
    fillOtherEnemies(selected);
    setShow(false);
  };

  const handleEnemyChange = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setEnemyAxieId(value);
  };

  const handleGetEnemyAxie = async () => {
    const res = await addEnemieOne(enemyAxieId);
    res && getEnemyAxies(res.owner, res.id);
  };

  const getEnemyAxies = async (ownerId, id) => {
    const res = await getOwnerAxies(ownerId);
    const axies = res
      .filter((axie) => axie.id !== id)
      .sort((a, b) => {
        return b.id > a.id;
      });

    setAxiesArray(axies);

    if (axies.length === 2) {
      fillOtherEnemies(axies.map((axie) => axie.id));
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="axie-options">
        <button className="btn btn-danger mx-2" onClick={handleGetEnemyAxie}>
          EnemyID
        </button>
        <input
          type="text"
          className="form-control"
          value={enemyAxieId}
          onChange={handleEnemyChange}
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
          <Modal.Title>Modal Enemy</Modal.Title>
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
