import React, { useState } from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"

const ForgetPass = () => {
    const [email,setEmail] = useState()
    const [Otp,setOtp] = useState('')
    const [password,setPassword] = useState()
    const [cpassword,setCpassword] = useState()

    const [otpForm,setotpForm] = useState(true)

    const navigate = useNavigate()

    const SendOtp = async(e)=>{
        e.preventDefault()
        
        try{
            const res = await fetch('/sendmail',{
                method:'POST',
                body:JSON.stringify({ email}),
                headers:{'Content-Type':'application/json'}
              })
              console.log("we are in try block")
            
              const data = await res.json()

              if (res.status==200){
                window.alert("Otp send on mail plz check your mail and reset the password :)")
                setotpForm(!otpForm)
              }
              else{
                window.alert("something went wrong")
              }

        }catch(err){
            console.log(err);
        }
    }

    const ResetPass = async(e)=>{
        e.preventDefault()
        console.log("we are in try block of reset pass")
        try{
            const res = await fetch('/changepass',{
                method:'POST',
                body:JSON.stringify({ email,Otp,password}),
                headers:{'Content-Type':'application/json'}
              })
              
            
              const data = await res.json()

              if (res.status==200){
                window.alert("reset password successfully :)")
                navigate("/")
              }
              else{
                window.alert("something went wrong")
              }

        }catch(err){
            console.log(err);
        }
    }

  return (
    <main
      className="main_login pt5 black-80 center"
      style={{ maxWidth: "50%", maxHeight: "30%", }}
    >

    

      {otpForm ? 
        
        <form className="measure" method='POST'>
      
        <h2 style={{color: "#664DE5"}}>Reset Password</h2>
        <h4 >Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</h4>
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
              type="email"
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
              required
              autocomplete="off"
            />
          </div>
          
        </fieldset>
        
        <div className='prev_next_forget'>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
              
            }}
            type="submit"
            value="Reset my Password"
            onClick={SendOtp}
            
          />
          
        </div>
      </form> 
      
      :
      
      <form className="measure" method='POST'>
      
        <h2 style={{color: "#664DE5"}}>Reset Password</h2>
        <h4 >Enter a OTP we'll send you an e-mail.</h4>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
          <label
          className="db lh-copy f6 mb1"
          htmlFor="full-name"
          style={{ textAlign: "left" }}
        >
          Enter the OTP
        </label>
        <input
          className="f6 br2 ph3 pv2 mb2 dib black w-100"
          type="text"
          
          size="30"
          placeholder="4-digit otp"
          value={Otp}
          onChange={(e)=>setOtp(e.target.value)}
          style={{
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#EAEEF5",
            
          }}
          required
          autocomplete="off"
        />

            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              New Password
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="email"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="new password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
                
              }}
              required
              autocomplete="off"
            />

            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Conform Password
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="email"
              name="full-name"
              id="full-name"
              size="30"
              placeholder="conform password"
              value={cpassword}
              onChange={(e)=>setCpassword(e.target.value)}
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
                
              }}
              required
              autocomplete="off"
            />
          </div>
          
        </fieldset>
        
        <div className='prev_next_forget'>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
              
            }}
            type="submit"
            value="Reset Password"
            onClick={ResetPass}
            
          />
          
        </div>
      </form> 
    }
    </main>
  )
}

export default ForgetPass
