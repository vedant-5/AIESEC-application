import React ,{useEffect,useState} from "react";
import styled from "styled-components";

import Dialogue from "./Dialogue";

import { useQuery, gql} from "@apollo/client";
import {LOAD_OPPS} from "../GraphQL/Queries"

import bookmark from "./Images/bookmark.svg";
import location from "./Images/location.svg";
import circle from "./Images/circle.svg";

import { Container} from "@material-ui/core";

const Layout = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-column-gap: 10px;
    border-radius: 10px;
    padding:30px 30px;
    width: 80%;
    margin: auto;
    background-color:#f2f8ff
`
const HeadLabel = styled.p`
    font-size: 1.2em;
    font-weight: 500;
`
const DescriptionLabel = styled.p`
    height: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #444544;
    font-size:1.05em;
    &:hover {
        overflow: visible;
    }
`
const LocationLabel = styled.span`
    display:inline-flex;
    place-items:center;
    color: #7d7d7d;
`


////DIALOGUE BOX////
///////////////////

function Cards(){

    const [modalShow, setModalShow] = React.useState(false);

    const {error,loading,data} = useQuery(LOAD_OPPS)
    const[opps, setOpps] = useState([]);

    useEffect(()=>{
        if(data){
            setOpps(data.allOpportunity.data);
        }
        console.log(data)
    }, [data])

    return(
       
        <div >
            <Dialogue
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
             {opps.map((val)=>{
            return(
                <Container style={{marginBottom: "10px"}}>
                <Layout key={val.id} onClick={() => setModalShow(true)}>
                    <div style= {{gridRow:"1/5"}}>
                        <img 
                        style={{width: "250px", 
                                height: "141.5px", 
                                objectFit : "cover", 
                                borderRadius: "10px"}} src={val.cover_photo.url}/>
                    </div>
                    <div style={{display: "inline-flex",position:"relative",height:"28px"}}>
                        <HeadLabel>
                            {val.title}
                        </HeadLabel>
                        <img style= {{position:"absolute", right:"10px"}} src={bookmark}/>
                    </div>
                    <div>
                      <LocationLabel>
                          <img src={location} style={{marginRight:"5px"}} />
                              {val.location} 
                      </LocationLabel>
                    </div>
                    <div>
                        <DescriptionLabel>
                            {val.description}
                        </DescriptionLabel>
                    </div>
                    <div 
                    style={{display:"inline-flex", 
                            placeItems: "center", 
                            color:"#7d7d7d", 
                            fontSize:"0.9em"}}>
                        <img src={circle} style={{marginRight:"5px"}}/>
                        {val.title}
                    </div>
                </Layout>
            </Container>
            )
        })}
            
            
        </div>
    )
}

export default Cards;