import React, { useState, createElement } from "react";

const TrafficLight = () => {

    const [redlight, setRedLight] = useState(false)
    const [yellowlight, setYellowLight] = useState(false)
    const [greenlight, setGreenLight] = useState(false)
    const [purplelight, setPurpleLight] = useState(false)
    const [showNewLight, setShowNewLight] = useState(false)

    function toggleRedLight() {
        if (redlight === false) {
            setRedLight(true)
            setYellowLight(false)
            setGreenLight(false)
            setPurpleLight(false)
        }
        else {
            setRedLight(false)
        }
    }

    function toggleYellowLight() {
        if (yellowlight === false) {
            setYellowLight(true)
            setRedLight(false)
            setGreenLight(false)
            setPurpleLight(false)
        }
        else {
            setYellowLight(false)
        }
    }

    function toggleGreenLight() {
        if (greenlight === false) {
            setGreenLight(true)
            setYellowLight(false)
            setRedLight(false)
            setPurpleLight(false)
        }
        else {
            setGreenLight(false)
        }
    }

    function togglePurpleLight() {
        if (purplelight === false) {
            setPurpleLight(true)
            setGreenLight(false)
            setYellowLight(false)
            setRedLight(false)
        }
        else {
            setPurpleLight(false)
        }
    }

    function alternate() {
        if (redlight === true) {
            setYellowLight(true)
            setRedLight(false)
            setGreenLight(false)
            setPurpleLight(false)
        }
        if (yellowlight === true) {
            setGreenLight(true)
            setYellowLight(false)
            setRedLight(false)
            setPurpleLight(false)
        }
        if (greenlight === true) {
            setPurpleLight(true)
            setGreenLight(false)
            setYellowLight(false)
            setRedLight(false)
        }
        if (purplelight === true) {
            setRedLight(true)
            setPurpleLight(false)
            setGreenLight(false)
            setYellowLight(false)
        }
        if (redlight === false && yellowlight === false && greenlight === false && purplelight === false) {
            setRedLight(true)
        }
    }



    return (
        <div className="container">
            <div className="stick bg-black"></div>
            <div className="box bg-black rounded">
                <div className="circle text-danger fs-1 position-relative">
                    <i onClick={() => toggleRedLight()} className="fa-solid fa-circle">
                        <i className="fa-solid fa-circle position-absolute" style={{ color: "#dada4d", top: "10px", boxShadow: "1px 1px 11px 13px", borderRadius: "50%", display: `${redlight === true ? "block" : "none"}` }}></i>
                    </i>
                </div>
                <div className="circle text-warning fs-1 position-relative">
                    <i onClick={() => toggleYellowLight()} className="fa-solid fa-circle">
                        <i className="fa-solid fa-circle position-absolute" style={{ color: "#dada4d", top: "10px", boxShadow: "1px 1px 9px 9px", borderRadius: "50%", display: `${yellowlight === true ? "block" : "none"}` }}></i>
                    </i>
                </div>
                <div className="circle text-success fs-1 position-relative">
                    <i onClick={() => toggleGreenLight()} className="fa-solid fa-circle">
                        <i className="fa-solid fa-circle position-absolute" style={{ color: "#dada4d", top: "10px", boxShadow: "1px 1px 9px 9px", borderRadius: "50%", display: `${greenlight === true ? "block" : "none"}` }}></i>
                    </i>
                </div>
                {showNewLight ? (
                    <div className="circle fs-1 position-relative" style={{ color: "purple" }}>
                        <i onClick={() => togglePurpleLight()} className="fa-solid fa-circle">
                            <i className="fa-solid fa-circle position-absolute" style={{ color: "#dada4d", top: "10px", boxShadow: "1px 1px 9px 9px", borderRadius: "50%", display: `${purplelight === true ? "block" : "none"}` }}></i>
                        </i>
                    </div>
                ) : (
                    <div style={{ display: "none" }}></div>
                )}
            </div>
            <div className="container mx-auto d-flex justify-content-center mt-5">
                <button onClick={() => alternate()} className="btn btn-primary mx-auto">Alternate</button>
                <button onClick={() => setShowNewLight(true)} className="btn btn-primary mx-auto">Add New Cicrlce</button>
            </div>
        </div>
    );
}

export default TrafficLight;