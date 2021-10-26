import './courses.css'
import React, { useEffect, useState } from "react";
import apiCourses from '../api/udemy courses'
import ViewCcourseSummary from '../components/viewCourseSummary';
import { useLocation, useRouteMatch } from 'react-router';

const Courses = () => {
    const [screenHight, setScreenHight] = useState(window.innerHeight);
    const lineHeight20 = (screenHight / 100) * 20
    
    const match = useRouteMatch()
    const [isPathExact, setIsPathExact] = useState(true)
    
    var courses = []
    var header = ""
    courses = apiCourses
    header = isPathExact? "list of courses": courses[0].courseName; 
    useEffect(()=>{
        setIsPathExact(match.isExact)
    },[])


    console.log(match);
    const location =  useLocation()
    console.log(location);
    return (

        <React.Fragment>
            <div className="header row align-middle" style={{ height: `${lineHeight20}px` }}>
                <div className="col-6 ps-5">
                    <h1 className = "fs-1" style={{ lineHeight: `${lineHeight20}px` }}>{header}</h1>
                </div>
                <div className="col-6 pe-5 ">
                    <div className="text-end fs-3" style={{ lineHeight: `${lineHeight20}px` }} >
                    {JSON.parse(localStorage.getItem("userDetails")).userName}
                    </div>
                </div></div>
            <div >
                {courses.map(course =>{
                    return <ViewCcourseSummary course = {course} height = {lineHeight20}/>
                })}
            </div>
        </React.Fragment>
    )
}
export default Courses;