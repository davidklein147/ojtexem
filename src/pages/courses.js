import './courses.css'
import React, { useEffect, useState } from "react";
import apiCourses from '../api/udemy courses'
import ViewCourseSummary from '../components/viewCourseSummary';
import ViewCourse from '../components/viewCourse';
import { useLocation, useRouteMatch } from 'react-router';
import { useParams, Route, Switch, Link, useHistory } from 'react-router-dom';

const Courses = () => {
    const [screenHight, setScreenHight] = useState(window.innerHeight);
    const lineHeight20 = (screenHight / 5)
    const {path, isExact } = useRouteMatch()

    const [courses, setCourses] = useState([])
    const [header, setHeader] = useState("")
    const [isPathExact, setIsPathExact] = useState(isExact)
    const [index, setIndex] = useState(-1);

    const hitory = useHistory()
    console.log(hitory);
    

    useEffect(() => {
        setCourses(apiCourses);
        setHeader(index < 0 ? "list of courses" : courses[index].courseName);
        setIsPathExact(isExact)
        isPathExact && setIndex(-1)
    }, [isPathExact, index])

    const buildListOfCourses = () => {
        return <React.Fragment>
            {courses.map((course, i) => {
                return <ViewCourseSummary course={course} path={path} />
            })}
        </React.Fragment>
    }
    console.log(useRouteMatch());
    console.log(useLocation())

    return (

        <React.Fragment>
            <div className="header" style={{ height: `${lineHeight20}px` }}>
                <div style={{ display: "table-row" }}>
                    <div className="ps-5 align-middle" style={{ display: "table-cell" }}>
                        <div className="" style={{ display: "inline-block" }}>
                            <h1 className="fs-1"  >{header}</h1>
                            {!isPathExact &&
                                    <button className="btn back-button m-0" onClick = {()=>{hitory.push(`${path}`)}}>back</button>
                                // <Link to={`${path}`}>
                                // </Link>
                                }
                        </div>
                    </div>
                    <div className="text-end fs-3 pe-5" style={{ lineHeight: `${lineHeight20}px` }} >
                        {JSON.parse(localStorage.getItem("userDetails")).userName}
                    </div>
                </div>
            </div>

            <Switch>
                <Route path={path} exact>
                    {buildListOfCourses()}
                </Route>
                <Route path={`${path}/:id`}>
                    <ViewCourse
                        courses={courses}
                        setIndex={setIndex}
                        index={index}
                        path={path}
                    ></ViewCourse>
                </Route>
            </Switch>
        </React.Fragment>
    )
}
export default Courses;