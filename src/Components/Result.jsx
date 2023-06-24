import React from "react";

const Result = ({animal, duration, stops}) => {
    return (
        <div>
            <p>{animal}: {duration}</p>
            { stops > 1 ? 
            <p>Approximate number of stops: {stops}</p> 
            : null }
        </div>
    )
}

export default Result;