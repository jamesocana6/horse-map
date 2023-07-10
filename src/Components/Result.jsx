import React from "react";

const Result = ({ animal, duration, animalPic, animation }) => {

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {/* shake and slide div */}
                <img src={animalPic} style={{ height: 50 }} alt={{animalPic}} className="wobble-hor-bottom slide-out-right"/>
                <p>{animal}: {duration}</p>
            </div>
        </div>
    )
}

export default Result;