import './login.css'
import logo from "../ui/images/udemy.png"
import React, { useEffect, useReducer, useState } from 'react'
import Progressbar from '../ui/components/progressBar';
import { useHistory } from 'react-router-dom';

const formState = (state, action) => {
    switch (action.type) {
        case "userName":
            state.userName = action.value;
            break;
        case "password":
            state.password = action.value
        default:
            break;
    }
    return state;
}

const Login = () => {
    const [isFormValid, setIsformvalid] = useState(false);
    const [progWidth, setProgWidth] = useState(0)
    const [isOnLoad, setIsOnload] = useState(false)
    const [formData, despatchFormData] = useReducer(formState, {
        userName: "",
        password: "",
    })
    const history = useHistory()

    const isFormValidHandler = () => {
        setIsformvalid(formData.userName.length > 0 && formData.password.length > 0)
    }
    useEffect(() => {
        isFormValidHandler()
    }, [formData])
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        let interval = ()=>{}
        if(isOnLoad){
            interval = setInterval(() => {
                let width = progWidth
                if (progWidth < 100) {
                    setProgWidth(width + 10)
                    console.log(progWidth);
                }
            }, 100);
        }
        return () => { clearInterval(interval) }
    }, [isOnLoad])
    console.log(progWidth);
    const login = (e) => {
        e.preventDefault();
        localStorage.setItem("userDetails", JSON.stringify({ userName: formData.userName, password: formData.password }))
        console.log(formData.userName, formData.password);
        setIsOnload(true)


        setTimeout(() => {
            history.push("/courses")
        }, 3000)
    }


    if (isOnLoad) return <Progressbar progWidth={progWidth} />

    return (
        <React.Fragment>
            <div className="login-body">
                <div className="d-flex justify-content-center p-5">
                    <img src={logo} height="100px" />
                </div>
                <div className="login-caption d-flex justify-content-center">Log In to Your Udemy Account!
                </div>
                <div className="d-flex justify-content-center p-5">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">enter your name
                                <input type="text" placeholder="user name" className="form-control"
                                    onInput={(e) => {
                                        despatchFormData({
                                            type: "userName",
                                            value: e.target.value
                                        })
                                        isFormValidHandler()
                                    }} />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">enter your password
                                <input type="password" placeholder="password" className="form-control"
                                    onInput={(e) => {
                                        despatchFormData({
                                            type: "password",
                                            value: e.target.value
                                        })
                                        isFormValidHandler()
                                    }

                                    } />
                            </label>
                        </div>

                        <button type="submit" class="btn btn-purple"
                            disabled={!isFormValid}
                            onClick={(e) => { login(e) }}
                        >login</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;