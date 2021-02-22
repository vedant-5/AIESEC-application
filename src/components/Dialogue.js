import React, {useEffect,useState} from "react";
import styled from "styled-components";

import Modal from "react-bootstrap/Modal";

import {LOAD_OPPS} from "../GraphQL/Queries"


import "../styles/dialogue.css";

const TitleInput  = styled.div`
    margin-bottom: 20px;
`
const DescriptionInput = styled.div`
    margin-bottom: 20px;
`


function Dialogue(props) {
    const [title,setTitle]= useState('')
    const [description,setDescription] = useState('')

    
    const changeTitle = (e)=>{
      setTitle(e.target.value)
    }

    const changeDescription = (e)=>{
      setDescription(e.target.value)
    }

    const changedData = ()=>{
      props.updateTitle(title)
      props.updateDescription(description)
    }
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
                    placeholder={props.title}
                    className="titleBox"
                    onChange={changeTitle}
                />
              </TitleInput>
              
              <DescriptionInput>
                <p style={{marginBottom:"3px"}}>Description</p>
                <textarea 
                    placeholder={props.description}
                    className="descriptionBox"
                    onChange={changeDescription}/>
              </DescriptionInput> 

          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="submitButton" onClick={changedData(),props.onHide}>Submit Changes</button>
        </Modal.Footer>
      </Modal>
    );
  }

export default Dialogue;