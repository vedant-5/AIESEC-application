import React, {useState} from "react";
import styled from "styled-components";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


import "../styles/dialogue.css";

const TitleInput  = styled.div`
    margin-bottom: 20px;
`
const DescriptionInput = styled.div`
    margin-bottom: 20px;
`


function Dialogue(props) {

    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{marginLeft:"20px"}}>
            Edit Details of Opportunity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form style={{marginLeft:"20px"}} >

              <TitleInput>
                <p style={{marginBottom:"3px"}}>Title</p>
                <input 
                    className="titleBox"/>
              </TitleInput>
              
              <DescriptionInput>
                <p style={{marginBottom:"3px"}}>Description</p>
                <textarea 
                    className="descriptionBox"/>
              </DescriptionInput> 

          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="submitButton" onClick={props.onHide}>Submit Changes</button>
        </Modal.Footer>
      </Modal>
    );
  }

export default Dialogue;