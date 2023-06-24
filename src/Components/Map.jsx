import React from "react";
import { GoogleMap, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from 'react';
import fixDuration from "../utils/utils";
import Route from "./Route";

const center = { lat: 40.7659104, lng: -73.9760941 };
const horseSpeed = 28;
const dogSpeed = 40;
const snailSpeed = 6.2137e-7;

const Map = ({isLoaded}) => {
    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [distanceValue, setDistanceValue] = useState(); //in meters
    const [duration, setDuration] = useState("");
    const [durHorse, setDurHorse] = useState();
    const [durSnail, setDurSnail] = useState();

    useEffect(() => {
        setDurHorse(fixDuration((distanceValue / 1609.34) / horseSpeed));
        setDurSnail(fixDuration((distanceValue / 1609.34) / snailSpeed));
        return () => { }
    }, [distance, duration])

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
            {/* <div>
                <Autocomplete>
                    <input type='text' placeholder='Origin' ref={originRef} />
                </Autocomplete>
                <Autocomplete>
                    <input type='text' placeholder='Destination' ref={destinationRef} />
                </Autocomplete>
            </div>
            <button onClick={calculateRoute}>Calculate</button>
            <button onClick={clearRoute}>CLEAR</button> */}
            <p> hello {distance} and {duration}</p>
            <p> By Horse {durHorse}</p>
            <p> By Snail {durSnail}</p>
        </div>
    )
}

export default Map;