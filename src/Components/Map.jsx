import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { useEffect, useState } from 'react';
import { fixDuration, stops } from "../utils/utils";
import Route from "./Route";
import Result from "./Result";

const center = { lat: 40.7659104, lng: -73.9760941 };
const horseSpeed = 28; //miles per hour with person
// const horseDistance = 80; //miles a day
// const humanSpeed = 6; //miles per hour with person
// const humanDistance = 2; //miles a day
const huskySpeed = 20; //miles per hour with sled
// const huskyDistance = 80; //miles a day
const snailSpeed = 0.00223694; //miles per hour

const Map = ({ isLoaded }) => {
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                <p style={{ fontSize: 72 }}>
                    Preparing the animals...
                </p>
            </div>
        )
    }
    return (
        <div style={{ width: "100vw", height: "100vh",}}>
            <GoogleMap
                center={center}
                zoom={4}
                mapContainerStyle={{
                    top: "15%",
                    position: "absolute",
                    width: "100vw",
                    maxWidth: "50%",
                    height: "80vh",
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
            {distance ?
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100vw", flexDirection: "column"}}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "50vw" }}>
                        <p style={{paddingLeft: 20}}> Start: {directionsResponse.request.origin.query} </p>
                        <p style={{paddingLeft: 20}}> End: {directionsResponse.request.destination.query} </p>
                        <p style={{paddingLeft: 20}}> Distance {distance}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "50vw" }}>
                        <Result
                            animal={"Horseback"}
                            duration={durHorse}
                            animalPic={require("../public/Horse.png")}
                            slideLength={50/horseSpeed+"s"}
                        />
                        <Result
                            animal={"Snail"}
                            duration={durSnail}
                            animalPic={require("../public/Snail.png")}
                            slideLength={0.05/snailSpeed+"s"}
                        />
                        <Result
                            animal={"Dogsled"}
                            duration={durHusky}
                            animalPic={require("../public/Dog.png")}
                            slideLength={50/huskySpeed+"s"}
                        />
                    </div>
                </div> : <div>Loading...</div>}
        </div>
    )
}

export default Map;