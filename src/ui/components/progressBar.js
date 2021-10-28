import React from "react";
import './progressBar.css'
const Progressbar = (props) => {


    return (
        <React.Fragment>

            <div class="progress" style={{ height: "40px" }}>
                <div className="progress-bar prog-color" role="progressbar" style={{ width: `${props.progWidth}%` }} >{props.progWidth}%</div>
            </div>
            <div class="d-flex justify-content-center prog-body " >
                <div style={{ position: "absolute", top: "40%" }}>
                    <div class="spinner-grow costum-spinner prog-color" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}
export default Progressbar;