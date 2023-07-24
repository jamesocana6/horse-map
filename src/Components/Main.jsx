import Map from './Map';
import { useJsApiLoader } from "@react-google-maps/api";
import "./styles.css"
import InfoBtn from './InfoBtn';
import { useState } from 'react';
import InfoModal from './InfoModal';

function Main() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries: ['places'],
  })
  const [infoModal, setInfoModal] = useState(false)
  return (
    <div style={{ backgroundColor: "tan", height: "100vh", width: "100vw"}}>
      <InfoBtn setInfoModal={setInfoModal}/>
      {infoModal? <InfoModal infoModal={infoModal} setInfoModal={setInfoModal}/> : null}
      <p className="title" style={{textAlign: "center", margin: 0,}}>Animal Travel Times</p>
      <Map isLoaded={isLoaded}/>
    </div>
  );
}

export default Main;

//TODO
//styling map, directions, results
//draw horse snail and dog
//on hover animalpic, animate 
//help page? Something happened and no vehicles work. luckily you have a horse and dogsled to take you around. They abide by driving laws and go a steady pace. The travel time is not including the recommended number of stops. 