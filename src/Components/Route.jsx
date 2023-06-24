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
        console.log("something1",result.routes[0]?.legs[0]?.distance.value)
        console.log("something2",result.routes[1]?.legs[0]?.distance.value)
        console.log("something3",result.routes[2]?.legs[0]?.distance.value)
        if (result.routes[0]?.legs[0]?.distance.value <= result.routes[1]?.legs[0]?.distance.value 
            && result.routes[0]?.legs[0]?.distance.value <= result.routes[2]?.legs[0]?.distance.value ) {
                console.log("OPTION1")

                setDistance(result.routes[0]?.legs[0]?.distance.text);
                setDistanceValue(result.routes[0]?.legs[0]?.distance.value);
                setDuration(result.routes[0]?.legs[0]?.duration.text);
            } else if (result.routes[1]?.legs[0]?.distance.value <= result.routes[2]?.legs[0]?.distance.value ) {
            console.log("OPTION2")
            setDistance(result.routes[1]?.legs[0]?.distance.text);
            setDistanceValue(result.routes[1]?.legs[0]?.distance.value);
            setDuration(result.routes[1]?.legs[0]?.duration.text);
        } else {
            console.log("OPTION3")
            setDistance(result.routes[2]?.legs[0]?.distance.text);
            setDistanceValue(result.routes[2]?.legs[0]?.distance.value);
            setDuration(result.routes[2]?.legs[0]?.duration.text);
        }
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
        </div>
    )
}

export default Route;