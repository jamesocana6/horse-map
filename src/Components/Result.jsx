import React from "react";

const Result = ({ animal, duration, animalPic, slideLength, animationDelay }) => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", overflow: "none" }}>
                <div className="shake">
                    <div className="slide" style={{animationDuration: slideLength, animationDelay: "1.0s"}}>
                        <img src={animalPic} style={{ height: 50, paddingLeft: 20}} alt={{ animalPic }} />
                    </div>
                </div>
                <p style={{paddingLeft: 20}}>{animal}: {duration}</p>
            </div>
        </div>
    )
}

export default Result;