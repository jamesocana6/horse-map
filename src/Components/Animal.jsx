import React from "react";

const Animal = ({ animal, duration, animalPic, slideLength, animationDelay }) => {
    return (
        <div style={{width: "100%"}}>
            <div style={{ display: "flex", flexDirection: "column", overflow: "none", width: "100%" }}>
                <div className="shake" style={{width: "100%"}}>
                    <div className="slide" style={{animationDuration: slideLength, animationDelay: "1.0s", width: "110%"}}>
                        <img src={animalPic} style={{ height: 50, marginLeft: 40}} alt={{ animalPic }} />
                    </div>
                </div>
                <p style={{marginLeft: 40, marginTop: 0}}>{animal}: {duration}</p>
            </div>
        </div>
    )
}

export default Animal;