import './login.css'
import logo from "../images/udemy.png"
import { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const isFormValid = ()=>{
        return userName.length === 0 && password.length === 0
    }

    const login = ()=>{
        
    }

console.log(userName?"1":"2");

    return (
        <div className="login-body">
            <div className="d-flex justify-content-center p-5">
                <img src={logo} height="100px"  />
            </div>
            <div className="d-flex justify-content-center p-5">
                <form>
                    <div className="mb-3">
                        <label className="form-label">enter your user name
                            <input type="text" placeholder="user name" className="form-control"
                            onInput = {(e)=>{setUserName(e.target.value)}} />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">enter your Password
                            <input type="password" placeholder= "password" className="form-control"
                            onInput = {(e)=>{setPassword(e.target.value)}}
                            />
                        </label>
                    </div>
                   
                    <button type="submit" class="btn btn-purple" 
                    disabled = {isFormValid()}
                    // onClick={}
                    >login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;