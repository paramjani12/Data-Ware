import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

let login=false;
const Protected = (props) => {
    const navigate = useNavigate();
    const {Component} = props
    useEffect(()=>{
        login = localStorage.getItem('login');
        if(!login){
            navigate('/login');
        }
    },[login])
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected