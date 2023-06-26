import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { useRef } from 'react';

const Route = ({setDirectionsResponse, setDistance, setDistanceValue, setDuration}) => {
    const originRef = useRef();
    const destinationRef = useRef();

    async function calculateRoute() {
        if (originRef.current.value === "" || destinationRef.current.value === "") {
            return
        }
        const directionsService = new google.maps.DirectionsService() //eslint-disable-line no-undef
        const result = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING, //eslint-disable-line no-undef
            unitSystem: google.maps.UnitSystem.IMPERIAL, //eslint-disable-line no-undef
            provideRouteAlternatives: true, 
        })
        setDirectionsResponse(result);
        if (result.routes[0]?.legs[0]?.distance.value <= result.routes[1]?.legs[0]?.distance.value 
            && result.routes[0]?.legs[0]?.distance.value <= result.routes[2]?.legs[0]?.distance.value ) {
            setDistance(result.routes[0]?.legs[0]?.distance.text);
            setDistanceValue(result.routes[0]?.legs[0]?.distance.value);
            setDuration(result.routes[0]?.legs[0]?.duration.text);
            } else if (result.routes[1]?.legs[0]?.distance.value <= result.routes[2]?.legs[0]?.distance.value ) {
            setDistance(result.routes[1]?.legs[0]?.distance.text);
            setDistanceValue(result.routes[1]?.legs[0]?.distance.value);
            setDuration(result.routes[1]?.legs[0]?.duration.text);
        } else {
            setDistance(result.routes[2]?.legs[0]?.distance.text);
            setDistanceValue(result.routes[2]?.legs[0]?.distance.value);
            setDuration(result.routes[2]?.legs[0]?.duration.text);
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "row", position: "absolute", zIndex: 1, height: "15%", width: "40.1%", backgroundColor: "rgba(50,50,50,0.5)", top: "5%", borderTopLeftRadius: 10, borderTopRightRadius: 10, alignItems: "center",}}>
            <div style={{display: "flex", flexDirection: "column", marginBlock: 5, width: "70%", }}>
                <Autocomplete>
                    <input type='text' placeholder='Origin' ref={originRef} style={{marginLeft: "7%", marginBlock: 5, width: "100%", height: 20,}}/>
                </Autocomplete>
                <Autocomplete>
                    <input type='text' placeholder='Destination' ref={destinationRef} style={{marginLeft: "7%", marginBlock: 5, width: "100%", height: 20,}}/>
                </Autocomplete>
            </div>
            <div style={{justifyContent: "flex-start", width: "15%",marginLeft: "9%",}}>
                <button onClick={calculateRoute} style={{ height: 25, marginLeft: "9%", width: "100%"}}>Start</button>
            </div>
        </div>
    )
}

export default Route;