import React , {useEffect,useState}from 'react';
import { DeviceEvent, getEvents } from './get-events';

// import { getEvents } from './get-events';useEffect(){

// Hey Dwight, just to make it clear,
// the goal here is to render the current status
// of each device from the events returned from 
// getEvents(). 

export const DataFetching = () => {
const [events,setEvents] = useState<DeviceEvent[]>();

  useEffect(()=>{
    getEvents().then((value) =>{
      setEvents(value)
    })
  })

  // here
  if(events === undefined){
    return <h1>hello nothing</h1>
  }else{
    return setEvents
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>(Render events here)</div>





    </div>

  )
}
export default DataFetching