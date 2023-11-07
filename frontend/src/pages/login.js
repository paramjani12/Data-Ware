import {React, useEffect, useState} from "react";
import "./login.css";
import img1 from '../images/user.png';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate, Link  } from "react-router-dom";


const LoginPage = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
 
    const PostData = async (e) =>{
            e.preventDefault();
            const res = await fetch("http://127.0.0.1:6565/api/v1/users/login",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if(data.status === "error"){
            window.alert("Log In failed. Please check your details.");   
        }
        else{
            localStorage.setItem('login', true)
            navigate('/home');
        }
    }

  return (
    <div className='Container'>
        <div className='FormContent'>
            <form method='POST' className='Form'>
                <div className='FormHeader'>
                    <h1 className='Text'>LOG IN</h1>
                </div>
                <div className='ImgSet'>
                    <div className='ImgBx'>
                        <img className='Img' src={img1}/>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-field'>
                        <EmailIcon className="icons" style={{ color: "#4d5974" }} />
                        <p className='lines'>|</p>
                        <input type='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} 
                            placeholder='Email'
                        />
                    </div>
                    <div className='input-field'>
                        <LockIcon className="icons" style={{ color: "#4d5974" }} />
                        <p className='lines'>|</p>
                        <input type='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} 
                            placeholder='Password'
                        />    
                    </div>
                </div>
                <div className='LineContainer'>
                    <div className='check-box'>
                        <input type='checkbox' className='check-box-1'/>Remember Me
                    </div>
                    <div className='check-box check-box-2'>
                        <a className='pointer'>Forgot Password?</a>
                    </div>
                </div>
                <div className='BtnContainer'>
                    <button className='button' type='submit' onClick={PostData}>
                        Log In
                    </button>

                </div>
                <Link to="/" className='Last-Line'>New here. Please Register First!</Link>
            </form>
        </div>

    </div>
  )
}

export default LoginPage