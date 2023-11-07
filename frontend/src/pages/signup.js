import {React, useState} from "react";
import "./signup.css";
import img1 from '../images/user.png';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate, Link  } from "react-router-dom";


const SignUpPage = () => {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
 
    const PostData = async (e) =>{
            e.preventDefault();
            const res = await fetch("http://127.0.0.1:6565/api/v1/users/signup",{
            method:"POST",
            withCredentials: true,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, dob, email, password
            })
        });
        const data = await res.json();
        console.log(data);
        if(data.status === "error"){
            window.alert("Sign up failed. Please check your details.");

            
        }
        else{
            window.alert("Sign Up successful. Please login to continue.");
            navigate("/login");
        }
    }

  return (
    <div className='Container'>
        <div className='FormContent'>
            <form method='POST' className='Form'>
                <div className='FormHeader'>
                    <h1 className='Text'>SIGN UP</h1>
                </div>
                <div className='ImgSet'>
                    <div className='ImgBx'>
                        <img className='Img' src={img1}/>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-field'>
                        <PersonIcon className="icons" style={{ color: "#4d5974" }} />
                        <p className='lines'>|</p>
                        <input type='text' value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} 
                            placeholder='Name'
                        />
                    </div>
                    <div className='input-field'>
                        <CalendarMonthIcon className="icons" style={{ color: "#4d5974" }} />
                        <p className='lines'>|</p>
                        <input type='date'
                            value={dob}
                            onChange={(e) => {
                                setDob(e.target.value);
                            }} 
                            placeholder='Date of Birth'
                        />
                    </div>
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
                <div className='BtnContainer'>
                    <button className='button' type='submit' onClick={PostData}>
                        Sign Up
                    </button>

                </div>
                <Link to="/login" className='Last-Line'>Already Have An Account. Please Login!</Link>

            </form>
        </div>

    </div>
  )
}

export default SignUpPage