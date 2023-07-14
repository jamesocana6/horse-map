import React from "react";

const InfoModal = ({infoModal, setInfoModal}) => {
    console.log(infoModal)
    function closeInfoModal() {
        setInfoModal(false)
    }
    return (
        <div 
            hidden={!infoModal} 
            style={{position: "absolute"}}
        >
            <p style={{fontStyle: "italic"}}>
                Info modal            
            </p>
            <p onClick={closeInfoModal}>x</p>
        </div>
    )
}

export default InfoModal;