import React from "react";
import { Modal } from "react-bootstrap";

const ModalMissYou = ({ show }) => {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>I Miss You</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Miss You</p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalMissYou;
