import "./viewCourse.css"
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch, useLocation } from "react-router-dom";


const ViewCourse = (props) => {
    const params = useParams()

    useEffect(() => {
        props.setIndex(props.courses.findIndex(course => course.id == params.id))
        
        return  ()=>{props.setIsPathExact(true)}
    }, [props.courses, props.index])

    return (
        props.index > -1 &&
        <React.Fragment>
            <div className="p-5" style={{ backgroundColor: "gray" }}>
                <div className="p-5" style={{ backgroundColor: "white" }}>
                    <div><img src={props.courses[props.index].img} height="140px" /></div>
                    <h2 className="my-3">{props.courses[props.index].Subtitle}</h2>
                    <p>{props.courses[props.index].Description}</p>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ViewCourse;