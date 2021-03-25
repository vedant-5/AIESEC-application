import React ,{useEffect,useState,useRef} from "react";
import styled from "styled-components";

import Dialogue from "./Dialogue";

import { useQuery, gql} from "@apollo/client";
import {LOAD_OPPS} from "../GraphQL/Queries"

import bookmark from "./Images/bookmark.svg";
import location from "./Images/location.svg";
import circle from "./Images/circle.svg";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Container } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
      borderColor: theme.palette.primary,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));



function Cards(props){

    const [modalShow, setModalShow] = useState(false);
    const {error,loading,data} = useQuery(LOAD_OPPS);
    const[opps, setOpps] = useState([]);
    const [num,setNum] = useState('');
    const [clickedID,setClickedID] = useState(null);
    const [clickedTitle, setTitle] = useState("");
    const [clickedDescription, setDescription] = useState("");

    const [page, setPage] = useState(props.page)

    console.log(page);

    const [updatetitle,newTitle] = useState('')
    const [updatedescription,newDescription] = useState('')

    useEffect(()=>{
        if(data){
            setOpps(data.allOpportunity.data);
            setNum(data.allOpportunity.paging)
        }
        console.log(data)
    }, [data])

   /*
   const updatedTitle = (data) =>{
       newTitle(data)
       setTitle(updatetitle)
       console.log(data)
   }

   const updatedDescription = (data) =>{
       newDescription(data)
       setDescription(updatedescription)
       console.log(data)
   }*/

   const classes = useStyles();
   const [sort,setSort] = useState('');
   const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

    return(
        <div>
            <Container style={{marginBottom: "20px"}}>
                <div style={{display:"inline-flex", placeItems:"center", position:"relative"}}>
                    <p style={{marginLeft:"125px",marginBottom :"5px", fontSize:"0.9em"}}>
                        Total Opportunities: <span style={{fontWeight:"600"}}>{num.total_items}</span>
                    </p>  
                    <FormControl variant="outlined" color="primary" className={classes.formControl} style={{marginLeft:"650px"}}>
                        <InputLabel color="primary" id="demo-simple-select-outlined-label">Explore</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={sort}
                        onChange={handleChangeSort}
                        label="Sort"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Relevance</MenuItem>
                        <MenuItem value={2}>Price: Low to High</MenuItem>
                        <MenuItem value={3}>Newest</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <hr style={{width:"80%",margin:"auto", borderBottom:"1px solid #40a3ff"}}/>

                
            </Container>

            
             {opps.map((val)=>{
            return(
                    <div onClick={()=>(setClickedID(val.id),setTitle(val.title), setDescription(val.description))} key={val.id}>
                        <Container style={{marginBottom: "10px"}}>
                        <Layout onClick={() => setModalShow(true)}>
                            <div style= {{gridRow:"1/5"}}>
                                <img 
                                style={{width: "250px", 
                                        height: "141.5px", 
                                        objectFit : "cover", 
                                        borderRadius: "10px"}} 
                                src={val.cover_photo.url}/>
                            </div>
                            <div 
                            style={{display: "inline-flex",
                                    position:"relative",
                                    height:"28px",
                                    fontFamily:"'Lato', sans-serif"}}>
                                <HeadLabel key={val.id}>
                                    {val.title}
                                </HeadLabel>
                                <img style= {{position:"absolute", right:"10px"}} src={bookmark}/>
                            </div>
                            <div>
                            <LocationLabel>
                                <img src={location} style={{marginRight:"5px"}} key={val.id}/>
                                    {val.location} 
                            </LocationLabel>
                            </div>
                            <div>
                                <DescriptionLabel key={val.id}>
                                    {val.description}
                                </DescriptionLabel>
                            </div>
                            <div 
                            style={{display:"inline-flex", 
                                    placeItems: "center", 
                                    color:"#7d7d7d", 
                                    fontSize:"0.9em"}}>
                                <img src={circle} style={{marginRight:"5px"}} key={val.id} />
                                {val.title}
                            </div>
                        </Layout>
                    </Container>    
                </div>
            )
        })}
            <Dialogue
                show={modalShow}
                onHide={() => setModalShow(false)}
                id = {clickedID}
                title = {clickedTitle}
                description = {clickedDescription}
                //updatedTitle = {updatedTitle}
                //updatedDescription = {updatedDescription}
            />
            
        </div>
    )
}

export default Cards;