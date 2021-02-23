import React, {useState} from "react";
import styled from 'styled-components';



import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Container } from "@material-ui/core";

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



import filterIcon from "./Images/filter.svg";
import { getDate } from "date-fns";
import { getDisplayDate } from "@material-ui/pickers/_helpers/text-field-helper";


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

  const Button = styled.button`
    position: absolute;
    right: 50px;
    border: 1px solid #037ef3;
    border-radius: 5px;
    padding: 5px 20px;
    background: #f3f4f7;
    font-size: 1.2em;
    display: inline-flex;
    place-items: center;
  `
  const FilterBar = styled.div`
    height: 90px;
    padding-top:10px;
    background-color: #f3f4f7;
    margin-bottom: 80px;
    margin-top:80px
  `
  const Span = styled.span`
    margin-right:20px;
  `

  

function Filter() {
    const classes = useStyles();
    const [duration, setDuration] = useState('');
    const [explore,setExplore] = useState('');

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-02-18'));


    const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleChangeExplore = (event) => {
    setExplore(event.target.value);
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    return (
        <FilterBar>
            <Container>
            <Row>
                <Col style= {{ display: "inline-flex", placeItems: "center",zIndex:"0"}}>
                <Span>
                    <FormControl variant="outlined" color="primary" className={classes.formControl}>
                        <InputLabel color="primary" id="demo-simple-select-outlined-label">Explore</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={explore}
                        onChange={handleChangeExplore}
                        label="Explore"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Volunteer</MenuItem>
                        <MenuItem value={2}>Teach</MenuItem>
                        <MenuItem value={3}>Intern</MenuItem>
                        </Select>
                    </FormControl>
                  </Span>
               
                  <Span>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Duration</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined-primary"
                            value={duration}
                            onChange={handleChangeDuration}
                            label="Duration"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>6-12 Weeks</MenuItem>
                            <MenuItem value={2}>3-6 Months</MenuItem>
                            <MenuItem value={3}>6-18 Months</MenuItem>
                            </Select>
                        </FormControl>
                    </Span>
                    <Span>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                        <KeyboardDatePicker
                          disableToolbar
                          variant="outline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-outline"
                          label="From Date"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}/>
                           </Grid>
                        </MuiPickersUtilsProvider>      
                    </Span>
                </Col>
                <Col style= {{ display: "inline-flex", alignItems: "center"}}>
                   <Button><img style={{marginRight: "10px"}} src={filterIcon}/>Filters</Button>
                </Col>
            </Row>
            </Container>
        </FilterBar>
      );
}
 
export default Filter;