import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { useEffect, useState } from 'react';
import { fixDuration, stops } from "../utils/utils";
import Route from "./Route";
import Result from "./Result";
import Footer from "./Footer";
import Animal from "./Animal";

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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontSize: 72 }}>
                    Preparing the animals...
                </p>
            </div>
        )
    }
    return (
        <div style={{ }}>
            <GoogleMap
                center={center}
                zoom={4}
                mapContainerStyle={{
                    top: "12%",
                    position: "absolute",
                    width: "100%",
                    maxWidth: "50%",
                    height: "75%",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: 10,
                    marginRight: 20,
                    alignSelf: "center",
                    boxShadow: "0px 0px 10px",
                    left: "20px",   
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
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: "100vw", flexDirection: "column" }}>
                    <Result distance={distance} directionsResponse={directionsResponse}/>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "50vw" }}>
                        <Animal
                            animal={"Horseback"}
                            duration={durHorse}
                            animalPic={require("../public/Horse.png")}
                            slideLength={50 / horseSpeed + "s"}
                        />
                        <Animal
                            animal={"Snail"}
                            duration={durSnail}
                            animalPic={require("../public/Snail.png")}
                            slideLength={0.05 / snailSpeed + "s"}
                        />
                        <Animal
                            animal={"Dogsled"}
                            duration={durHusky}
                            animalPic={require("../public/Dog.png")}
                            slideLength={50 / huskySpeed + "s"}
                        />
                    </div>
                </div> : 
            <div></div>}
            <Footer/>
        </div>
    )
}

export default Map;