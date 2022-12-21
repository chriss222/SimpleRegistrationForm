import React from "react";

export default function StepTwo() {
    return (
        <>
            <h1>Merepere Step two!</h1>
            <div className="progress" style={{height: "20px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "66%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}