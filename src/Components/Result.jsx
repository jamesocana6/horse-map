import React from "react";

const Result = ({ animal, duration, stops, animalPic }) => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img src={animalPic} style={{ height: 50 }} />
                <p>{animal}: {duration}</p>
            </div>
            {stops > 1 ?
                <p>Approximate number of stops: {stops}</p>
                : null}
        </div>
    )
}

export default Result;