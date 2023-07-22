import React from "react";

const InfoModal = ({infoModal, setInfoModal}) => {
    console.log(infoModal)
    function closeInfoModal() {
        setInfoModal(false)
    }
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
                    position: "absolute", 
                    height: "50vh", 
                    width: "50vw", 
                    backgroundColor: "rgba(200,200,200,1)",
                    borderRadius: 15,
                    }}
            >
                <div>
                    <p style={{fontStyle: "italic"}}>
                        Info modal            
                    </p>
                </div>
                <div 
                    onClick={closeInfoModal}
                    style={{
                        cursor: "pointer",
                        position: "absolute", 
                        top: 20, 
                        right: 20,
                        height: 10,
                        width: 10,
                        borderRadius: 3,
                        borderWidth: 2,
                        borderStyle: "solid",
                        borderColor: "black",
                        padding: 0, margin: 0
                    }}
                >
                    <p style={{padding: 0, margin: 0}}>X</p>
                </div>
            </div>
        </div>
    )
}

export default InfoModal;