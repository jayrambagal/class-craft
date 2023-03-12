import React from "react";
import tick from "./tick.jpg";
import {useNavigate} from 'react-router-dom';

const PageFour = () => {

  const navigate = useNavigate()
  const LogOutPage = async () =>{
    try{

        const res = await fetch("/logout",{
            method:'GET',
            headers:{Accept:'application/json',
                    "Contact-Type":'application/json'
                    },
            credentials:'include'
        })

        const data = await res.json()
        console.log(data)

        if (!res.status===200 || !data){
            const error = new Error(res.error)
            throw error
        }else{
                navigate("/")
        }

    }catch(err){
        navigate("/")
        console.log(err);
    }
}

    return (
      <div
        className="mw5 bg-white pa2-ns mt5 dib"
        style={{ maxWidth: "30%", maxHeight:'30%' }}
      >
        <img
          src={tick}
          className="h3 w3"
          title="success icon"
          alt="tick-icon"
        />
        <div className="center"><h3 className="">Congratulations, Jay !</h3></div>
        <p style={{ color: "#C0C0C0" }}>
          You have Successfully submited the form !
        </p>

        {<input
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
          type="submit"
          value="Logout"
          onClick={LogOutPage}
    /> }

      </div>
    );
}

export default PageFour;