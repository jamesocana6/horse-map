import React from "react";

const Result = ({ directionsResponse, distance }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "start", width: "50vw" }}>
            <p style={{ paddingLeft: 40, marginBlock: 10 }}> Start: {directionsResponse.request.origin.query} </p>
            <p style={{ paddingLeft: 40, marginBlock: 10 }}> End: {directionsResponse.request.destination.query} </p>
            <p style={{ paddingLeft: 40, marginTop: 10, marginBottom: 40 }}> Distance {distance}</p>
        </div>
    )
}

export default Result;