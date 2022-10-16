import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
// import Fetch from './components/fetch'
import { styled, makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EventBox from './components/event_box/eventBox';
import EventInfo from './components/event_box/EventBoxInterface';
import CalculatTime from './components/CalculateTime';
import axios from 'axios'

function GetEventList(event_list: EventInfo[]): JSX.Element[] {
  const [element, setElement] = useState<JSX.Element[]>([]);
  let eventbox_list: JSX.Element[] = [];
  var date_string: string;
  console.log("Hi", event_list.length)
  useEffect(() => { event_list.forEach((obj) => {
    let to_replace_description: string = obj.description;
    to_replace_description=to_replace_description.trim();
    if(obj.description.length >= 100) {
      let index: number = to_replace_description.indexOf(' ', 99);
      to_replace_description = obj.description.substring(0,index) + "...";
    }
    let time: string = "";
    if(obj.isAsync != null && obj.isAsync == false && obj.startTime!=null&&obj.endTime!=null) {
      
      time = CalculatTime(obj.startTime, obj.endTime)
    }
    
    eventbox_list.push(<EventBox event_name={obj.name} event_description={to_replace_description} event_type={obj.eventType} time={time}/>);
    console.log(eventbox_list.length)
  })
  setElement(eventbox_list)
},[event_list])
  
  return element
}


function App(){
  const [event, setEvent] = useState<EventInfo[]>([]);
  
  async function Fetch() {
    let res = await axios.get('https://api.hackillinois.org/event/').then(res=>{
      let event_list: EventInfo[] = [];
      res.data.events.map((event: Object)=> {
        let objToString: string = JSON.stringify(event);
        let obj: EventInfo = JSON.parse(objToString)
        event_list.push(obj)
      })
      setEvent(event_list)
    })
    .catch(err => {
      console.log(err)
    })
  }
  if(event.length==0)
    Fetch()
  return (

      <Box sx={{flexGrow:1, display:"flex"}} >
        <Grid container alignItems="center" >
          {GetEventList(event)}
        </Grid>
      </Box>
  )
}
export default App;

//rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} direction="column" justifyContent="center" alignItems="center"