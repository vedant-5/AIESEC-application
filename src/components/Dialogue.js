import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../styles/dialogue.css";

function Dialogue(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Details of Opportunity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <p>Title</p>
              <input/>

              <p>Description</p>
              <input/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="submitButton" onClick={props.onHide}>Submit Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default Dialogue;