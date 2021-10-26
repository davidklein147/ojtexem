import './courses.css'
import React, { useState } from "react";
import coutses from '../api/udemy courses'
import OneCourse from '../components/oneCourse';


const Courses = () => {
    const [screenHight, setScreenHight] = useState(window.innerHeight);
    const lineHeight20 = (screenHight / 100) * 20
    const lineHeight80 = (screenHight / 100) * 80

    console.log(window.innerHeight);
    return (
        <React.Fragment>
            <div className="header row align-middle" style={{ height: `${lineHeight20}px` }}>
                <div className="col-6 p-5">
                    <h1 style={{ lineHeight: `${lineHeight20 / 2}px` }}>list of courses</h1>
                </div>
                <div className="col-6 pe-5 ">
                    <div className="text-end fs-1" style={{ lineHeight: `${lineHeight20}px` }} >
                    {JSON.parse(localStorage.getItem("userDetails")).userName}
                        {/* <p className="text-center" style = {{height : `${lineHeight20/2}px`}}>{JSON.parse(localStorage.getItem("userDetails")).userName}</p> */}
                    </div>
                </div></div>
            <div style={{ height: `${(screenHight / 100) * 80}px` }}>
                {coutses.map(course =>{
                    return <OneCourse course = {course}/>
                })}
            </div>
        </React.Fragment>
    )
}
export default Courses;