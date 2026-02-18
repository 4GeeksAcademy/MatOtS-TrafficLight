import React, { useState } from "react";

const TrafficLight = () => {

    const [redlight, setRedLight] = useState(false)
    console.log("esto es redlight",redlight)
    const [yellowlight, setYellowLight] = useState(false)
    console.log("esto es yellowlight",yellowlight)
    const [greenlight, setGreenLight] = useState(false)
    console.log("esto es greenlight",greenlight)

    function toggleRedLight() {
        if (redlight === false) {
            setRedLight(true)
            setYellowLight(false)
            setGreenLight(false)

            console.log("entra al if")
        }
        else {
            console.log("entra al else")
            setRedLight(false)
        }
    }

    function toggleYellowLight() {
        if (yellowlight === false) {
            setYellowLight(true)
            setRedLight(false)
            setGreenLight(false)
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
        }
        else {
            setGreenLight(false)
        }
    }

    function alternate() {
        if (redlight === true) {
            console.log("entra en el 1ro")
            setYellowLight(true)
            setRedLight(false)
            setGreenLight(false)
        }
        if (yellowlight === true) {
            setGreenLight(true)
            setYellowLight(false)
            setRedLight(false)
        }
        if (greenlight === true) {
            setGreenLight(false)
            setYellowLight(false)
            setRedLight(true)
        }
        if (redlight === false && yellowlight === false && greenlight === false) {
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
            </div>
            <button onClick={() => alternate()} className="btn btn-primary mx-auto">Alternate</button>
        </div>
    );
}

export default TrafficLight;