import React from "react";

const AnimalInfo = ({animal, animalSpeed, animalDistance}) => {
    return (
        <div>
            <h3 style={{ padding: 0, margin: 0}}>
                {animal} Info            
            </h3>
            <p style={{ padding: 0, margin: 0, marginBottom: 10}}>
                Speed: {animalSpeed}
            </p>
        </div>
    )
}

export default AnimalInfo;