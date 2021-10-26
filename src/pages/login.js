import './login.css'
import logo from "../images/udemy.png"
import { useEffect, useReducer, useState } from 'react'
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
    const [isFormValid, setIsformvalid] = useState(false);


    const login = (e) => {
        e.preventDefault();
        localStorage.setItem("userDetails", JSON.stringify({ userName: formData.userName, password: formData.password }))
        console.log(formData.userName, formData.password);
        history.push("/courses")

    }



    return (
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
    )
}

export default Login;