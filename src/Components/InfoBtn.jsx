import React from "react";

const InfoBtn = ({setInfoModal}) => {
    function openInfoModal() {
        setInfoModal(true)
    }

    return (
        <div style={{position: "absolute", top: 10, right: 10}}>
            <img style={{height: 30, cursor: "pointer"}} src={require("../public/InfoBtn.png")} onClick={openInfoModal}/>
        </div>
    )
}

export default InfoBtn;