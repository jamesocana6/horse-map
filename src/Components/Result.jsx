import React from "react";

const Result = ({ animal, duration, animalPic, animation }) => {

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="roll">
                    <div className="shake">
                        <div className="slide">
                            <img src={animalPic} style={{ height: 50 }} alt={{ animalPic }} />
                        </div>
                    </div>
                </div>
                <p>{animal}: {duration}</p>
            </div>
        </div>
    )
}

export default Result;