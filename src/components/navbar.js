import React from "react";
import styled from 'styled-components';
import logo from "./Images/logo.svg";
import searchIcon from "./Images/search.svg"

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Nav = styled.nav`
    background:#037ef3;
    height: 80px;
    box-shadow:  0px 6px 12px -6px rgba(0,0,0,0.30);
    align-items: center;
    justify-content: center
`

const LogIn = styled.a`
font-size: 1.2em;
margin-left:220px;
color: white;
`
const Form = styled.form`
background-color: white;
padding-left: 20px;
vertica-align:center;
width: 50%;
border-radius: 6px;
display:inline-flex;
place-items: center;
`


const Navbar = () => {
    return (
        <Nav className="navbar">
                <Row style= {{width: "100%", paddingLeft:"60px"}}>
                    <Col md={2} style={{display: "inline-flex", placeItems:"center"}}><img src={logo}/></Col>
                    <Col md={6} >
                        <div style = {{paddingLeft: "50px" }}>
                            <Form>
                            <img src={searchIcon}/>
                                <input
                                    placeholder="Search for an experience"
                                    type="/text"
                                    style = {{
                                        border: "1px solid white",
                                        borderRadius: "6px",
                                        padding:'10px 12px',
                                        width:'90%'
                                    }}
                                />
                            </Form>    
                        </div>
                    </Col>
                    <Col style={{display: "inline-flex", placeItems:"center"}} md={3}>
                        <LogIn>Log In</LogIn>
                    </Col>
                </Row>
        </Nav>
     );
}
 
/**/
export default Navbar;