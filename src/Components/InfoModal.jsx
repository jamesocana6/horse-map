import React from "react";
import AnimalInfo from "./AnimalInfo";
import { animalSpeeds } from "../utils/utils";

const InfoModal = ({infoModal, setInfoModal}) => {
    function closeInfoModal() {
        setInfoModal(false)
    }
    const animalinfo = animalSpeeds.map((curr, next) => {
        return <AnimalInfo key={curr.name} animal={curr.name} animalSpeed={curr.speedTxt}/>
    })
    return (
        <div 
            hidden={!infoModal} 
            style={{
                position: "absolute", 
                height: "100vh", 
                width: "100vw", 
                backgroundColor: "rgba(50,50,50,0.5)", 
                zIndex: 2, 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
                }}
        >
            <div 
                style={{
                    minWidth: 420,
                    position: "absolute", 
                    height: "50vh", 
                    width: "50vw", 
                    backgroundColor: "rgba(200,200,200,1)",
                    borderRadius: 15,
                    }}
            >
                <div style={{padding: 20}}>
                    {animalinfo}
                    <p style={{fontStyle: "italic",}}>
                        Note: These are average speeds and only approximate values. 
                    </p>
                    <p style={{fontStyle: "italic",}}>
                        Note: These times are assuming there are no other cars (or animals) on the road, the animals follow the rules of the road, and the animals do not need rest.
                    </p>
                </div>
                <div 
                    onClick={closeInfoModal}
                    style={{
                        cursor: "pointer",
                        position: "absolute", 
                        top: 20, 
                        right: 20,
                        height: 20,
                        width: 20,
                        borderRadius: 3,
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderColor: "black",
                        padding: 0, margin: 0,
                    }}
                >
                    <p style={{padding: 0, margin: 0, textAlign: "center", fontWeight: 800}}>X</p>
                </div>
                <div style={{padding: 0, margin: 0, left: 20, right: 20, fontStyle: "italic",  position: "absolute", bottom: 20}}>
                    <p style={{padding: 0, margin: 0,}}>
                        © AnimalTravelTimes.com all rights reserved. <a href="https://james-ocana-portfolio.onrender.com" style={{fontStyle: "normal", textDecoration: "none"}} target={"_blank"}>Dev</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoModal;