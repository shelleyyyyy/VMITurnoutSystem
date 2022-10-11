import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Login() {

    function getLoginEmail(){
        var loginEmail
        
    }

    return (
      <div>
            <h1>VMI Turnout System Login</h1>
            <label for ="lblEmail">E-Mail: </label>
            <input type ="text" id="txtEmail" name="txtEmail" placeholder=" "></input>
            <label for ="lblPassword">Password: </label>
            <input type ="text" id="txtPassword" name="txtPassword" placeholder=" "></input>
            <button type="button">Login</button>
            <br></br>
            <a href=" ">Sign Up Here</a>
            <br></br>
            <a href=" ">Forgot Password?</a>
      </div>
    )
  }
  
  

