import React from "react";

const Result = ({ animal, duration, animalPic, slideLength, animationDelay }) => {
    console.log(slideLength)
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", overflow: "none" }}>
                <div className="shake">
                    <div className="slide" style={{animationDuration: slideLength, animationDelay: "1.0s"}}>
                        <img src={animalPic} style={{ height: 50, overflow: "hidden",}} alt={{ animalPic }} />
                    </div>
                </div>
                <p>{animal}: {duration}</p>
            </div>
        </div>
    )
}

export default Result;