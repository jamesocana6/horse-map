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
            travelMode: google.maps.TravelMode.BICYCLING, //eslint-disable-line no-undef
            unitSystem: google.maps.UnitSystem.IMPERIAL //eslint-disable-line no-undef
        })
        setDirectionsResponse(result);
        setDistance(result.routes[0].legs[0].distance.text);
        setDistanceValue(result.routes[0].legs[0].distance.value);
        setDuration(result.routes[0].legs[0].duration.text);
    }

    function clearRoute() {
        setDirectionsResponse(null);
        setDistance("");
        setDuration("");
        originRef.current.value = "";
        destinationRef.current.value = "";
    }

    return (
        <div>
            <div>
                <Autocomplete>
                    <input type='text' placeholder='Origin' ref={originRef} />
                </Autocomplete>
                <Autocomplete>
                    <input type='text' placeholder='Destination' ref={destinationRef} />
                </Autocomplete>
            </div>
            <button onClick={calculateRoute}>Calculate</button>
            <button onClick={clearRoute}>CLEAR</button>
        </div>
    )
}

export default Route;