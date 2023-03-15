import React from 'react'
import logo2 from "./logo2.png"
import { NavLink } from 'react-router-dom'

const ChangePass = () => {
  return (
   
    <main
    className="main_login pt5 black-80 center"
    style={{ maxWidth: "50%", maxHeight: "30%", }}
  >

    <form className="measure" method='POST'>
      <h2 style={{color: "#664DE5"}} >Change Password</h2>
      <h3 >Change your password? Enter your e-mail address and old password below, and we'll send you an e-mail allowing you to reset it.</h3>
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
            // value={email}
            // onChange={(e)=>setEmail(e.target.value)}
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
            type="password"
            name="display-name"
            id="display-name"
            placeholder="password"
            // value={password}
            // onChange={(e)=>setPassword(e.target.value)}
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#EAEEF5",
            }}
          />
        
          <div className="Change_Forget">
        <NavLink to="/changepassword" style={{marginTop:"10px"}}>Change password </NavLink>
        <NavLink to="/forget" style={{marginTop:"10px"}}>Forget password ? </NavLink>
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
        //   onClick={LoginPage}
        />
      </div>
    </form>
  </main>
   
  )
}

export default ChangePass
