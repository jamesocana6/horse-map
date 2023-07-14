import React from "react";

const Animal = ({ animal, duration, animalPic, slideLength, animationDelay }) => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", overflow: "none" }}>
                <div className="shake">
                    <div className="slide" style={{animationDuration: slideLength, animationDelay: "1.0s"}}>
                        <img src={animalPic} style={{ height: 50, marginLeft: 40}} alt={{ animalPic }} />
                    </div>
                </div>
                <p style={{marginLeft: 40, marginTop: 0}}>{animal}: {duration}</p>
            </div>
        </div>
    )
}

export default Animal;