import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from './logo2.png';
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
  
    const LoginPage = async(e)=>{
      e.preventDefault()

      try{
        console.log(email,password)
        const res = await fetch('/login',{
          method:'POST',
          body:JSON.stringify({ email,password}),
          headers:{'Content-Type':'application/json'}
        })

        const data = await res.json()
        

        if(res.status===200){
          window.alert("login Successfully !")
          navigate('/home')  
        }
        else{
          window.alert("invalid Crediantials")
        }

      }catch(err){
        console.log(err)
      }
    }

  return (
  
    
      <main
      className="main_login pt5 black-80 center"
      style={{ maxWidth: "50%", maxHeight: "30%", }}
    >

    <div className="ma5 center">
            <img className='' style={{width: '45px', height: '45px'}} src={logo2} alt='logo'/>
            <span className="mt3 f4">ClassCraft</span>
        </div>

      <form className="measure" method='POST'>
        <h2 >Welcome to ClassCraft !</h2>
        <h3 style={{color: "#664DE5"}}>Login</h3>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Email
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              Password
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          
            <div className="Change_Forget">
          <NavLink>Change password </NavLink>
          <NavLink>Forget password </NavLink>
          </div>
          </div>
          
        </fieldset>
        
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
            }}
            type="submit"
            value="Login"
            onClick={LoginPage}
          />
        </div>
      </form>
    </main>
      
    
  )
}

export default Login
