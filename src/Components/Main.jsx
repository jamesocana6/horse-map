import Map from './Map';
import { useJsApiLoader } from "@react-google-maps/api";

function Main() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries: ['places'],
  })
  return (
    <div>
      <Map isLoaded={isLoaded}/>
    </div>
  );
}

export default Main;
