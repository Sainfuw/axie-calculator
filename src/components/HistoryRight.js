import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const HistoryRight = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="history">
      <div className="history-right">
        <div className="donate" onClick={() => setShow(true)}></div>
      </div>
      <div className="counter-elements"></div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName="axie-donate-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Donations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ronin: ronin:7350b8bb2f18e93f079c0e2887d39159e7d89b58</p>
          <p>Thanks for support this page, any donation will be appreciated</p>
          <div className="image-stonks"></div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};
