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
const snailSpeed = 6.2137e-7; //miles per hour

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
        <div style={{ display: "flex", flexDirection: "row", width: "100vw", height: "100vh", backgroundColor: "tan" }}>
            <GoogleMap
                center={center}
                zoom={4}
                mapContainerStyle={{ width: "50%", height: "100%" }}
                options={{
                    fullscreenControl: false,
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
                <Result animal={"Horseback"} duration={durHorse} stops={stops(distanceValue, horseDistance)}/>
                <Result animal={"Snail"} duration={durSnail} stops={0}/>
                <Result animal={"Dogsled"} duration={durHusky} stops={stops(distanceValue, huskyDistance)}/>
            </div> : null}
        </div>
    )
}

export default Map;