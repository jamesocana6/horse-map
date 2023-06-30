import React from "react";

const Result = ({ animal, duration, stops, animalPic, animalStop }) => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img src={animalPic} style={{ height: 50 }} alt={{animalPic}}/>
                <p>{animal}: {duration}</p>
            </div>
            {stops > 1 ?
                <p>Approximate number of stops (every {animalStop} miles): {stops}</p>
                : null}
        </div>
    )
}

export default Result;