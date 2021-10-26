import Android from '../images/android.png'
import django from '../images/django.png'
import flutter from '../images/flutter.png'
import node from '../images/node.png'
import web from '../images/web.png'

const OneCourse = (props)=>{
    const course = props.course;
    console.log(course.courseName);
    return(
        <div className = "border">
            <img src ={props.courseName}/>
        </div>
    )
}

export default OneCourse;