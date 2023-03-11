import React from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from './logo2.png';
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
  return (
  
    
      <main
      className="main_login pt5 black-80 center"
      style={{ maxWidth: "50%", maxHeight: "30%", }}
    >

    <div className="ma5 center">
            <img className='' style={{width: '45px', height: '45px'}} src={logo2} alt='logo'/>
            <span className="mt3 f4">ClassCraft</span>
        </div>

      <form className="measure" >
        <h2 >Welcome to ClassCraft !</h2>
        <h3 style={{color: "#664DE5"}}>Login</h3>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Username
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="username"
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
            onClick={()=>{navigate('/home')}}
            
          />
        </div>
      </form>
    </main>
      
    
  )
}

export default Login
