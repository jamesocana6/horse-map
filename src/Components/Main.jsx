import Map from './Map';
import { useJsApiLoader } from "@react-google-maps/api";

function Main() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries: ['places'],
  })
  return (
    <div style={{paddingInline: 20, backgroundColor: "tan"}}>
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