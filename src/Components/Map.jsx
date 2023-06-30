import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { useEffect, useState } from 'react';
import { fixDuration, stops } from "../utils/utils";
import Route from "./Route";
import Result from "./Result";

const center = { lat: 40.7659104, lng: -73.9760941 };
const horseSpeed = 28; //miles per hour with person
const horseDistance = 80; //miles a day
const huskySpeed = 20; //miles per hour with sled
const huskyDistance = 80; //miles a day
const snailSpeed = 0.00223694; //miles per hour

const Map = ({isLoaded}) => {
    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [distanceValue, setDistanceValue] = useState(); //in meters
    const [duration, setDuration] = useState("");
    const [durHorse, setDurHorse] = useState();
    const [durSnail, setDurSnail] = useState();
    const [durHusky, setDurHusky] = useState();

    useEffect(() => {
        setDurHorse(fixDuration((distanceValue / 1609.34) / horseSpeed));
        setDurSnail(fixDuration((distanceValue / 1609.34) / snailSpeed));
        setDurHusky(fixDuration((distanceValue / 1609.34) / huskySpeed));
        return () => { }
    }, [distanceValue, duration])

    if (!isLoaded) {
        return (
            <div>
                <p>
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "100vh"}}>
            <GoogleMap
                center={center}
                zoom={4}
                mapContainerStyle={{ 
                    position: "sitcky",
                    width: "40%", 
                    height: "90%", 
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: 10, 
                    marginRight: 20,
                    alignSelf: "center", 
                }}
                options={{
                    fullscreenControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    minZoom: 2,
                }}
                onLoad={map => setMap(map)}
            >
                {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
            </GoogleMap>
            <Route 
                setDirectionsResponse={setDirectionsResponse} 
                setDistance={setDistance} 
                setDistanceValue={setDistanceValue}
                setDuration={setDuration}
            />
            {distance ? <div style={{display: "flex", flexDirection: "column"}}>
            <p> Distance {distance}</p>
                <p>Travel Time</p>
                <Result 
                    animal={"Horseback"} 
                    duration={durHorse} 
                    stops={stops(distanceValue, horseDistance)} 
                    animalPic={require("../public/Horse.png")}
                    animalStop={horseDistance}
                    />
                <Result 
                    animal={"Snail"}
                    duration={durSnail}
                    stops={0} 
                    animalPic={require("../public/Snail.png")}
                    animalStop={0}
                    />
                <Result 
                    animal={"Dogsled"}
                    duration={durHusky}
                    stops={stops(distanceValue, huskyDistance)} 
                    animalPic={require("../public/Dog.png")}
                    animalStop={huskyDistance}
                    />
            </div> : null}
        </div>
    )
}

export default Map;