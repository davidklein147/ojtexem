import './viewCourseSummary.css'
import starFill from '../ui/images/star-fill.svg'
import star from '../ui/images/star.svg'
import { Link } from 'react-router-dom'

const ViewCcourseSummary = (props) => {
    const course = props.course;
    console.log(props);

    const starsLavel = () => {
        var arr = []
        let index;
        for (index = 0; index < course.stars; index++) {
            arr.push(<img src={starFill} />)
        }
        for (let index1 = index; index1 < 5; index1++) {
            arr.splice(0, 0, <img src={star} />)
        }
        return arr;
    }

    return (

        <Link to={`${props.path}/${course.id}`} className = "link">
            <div className="course-back m-3 p-3" style={{ height: `150px` }} onClick={() => {
            }
            }>
                <div class="d-flex justify-content-between ">
                    <img className="img-box " src={course.img} height="115px" />
                    <div className="text-end">
                        <h3>{course.courseName}</h3>
                        <h4>{course.title}</h4>
                        {starsLavel()}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ViewCcourseSummary;