import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./PageTwo.css";

const PageTwo = ({onButtonClick}) => {

    const [firstname,setFirstname] = useState("")
    const [middlename,setMiddlename] = useState("")
    const [lastname,setLastname] = useState("")
    const [registraiton_no,setRegistration] = useState("")
    const [deparment,setDepartment] = useState("")
    const [rollno,setRollno] = useState("")
    const [division,setDivision] = useState("")

    const navigate = useNavigate()
    const SetInfo = async(e) =>{
      
      e.preventDefault()
      console.log("guu")
      try{

        const res = await fetch('/home',{
          method:'POST',
          body:JSON.stringify({ firstname,middlename,lastname,registraiton_no,deparment,rollno,division}),
          headers:{'Content-Type':'application/json'}
        })

        const data = await res.json()
        

        if(res.status===200){
          onButtonClick("pagethree")
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
        className="pt5 black-80 center"
        style={{ maxWidth: "30%", maxHeight: "30%", margin: "auto" }}
      >
        <form className="measure" method="POST">
          <h2>Let's set up a info for all your work</h2>
          <p style={{ color: "#C0C0C0" }}>
            You can always create another workspace later.
          </p>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label
                className="left db lh-copy f6 mb1"
                htmlFor="workspace-name"
                style={{textAlign: 'left'}}
              >
                Full Name<span style={{color:'red'}}>*</span>
              </label>

              <div className="Full_name">
              <input
                className="f6 br2 ph3 pv2 mb2 dib black w-100"
                type="text"
                name="workspace-name"
                id="workspace-name"
                size="30"
                placeholder="FirstName"
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                required
              />
              <input
                className="f6 br2 ph3 pv2 mb2 dib black w-100"
                type="text"
                name="workspace-name"
                id="workspace-name"
                size="30"
                placeholder="MiddleName"
                value={middlename}
                onChange={(e)=>setMiddlename(e.target.value)}
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                
              />
              <input
                className="f6 br2 ph3 pv2 mb2 dib black w-100"
                type="text"
                name="workspace-name"
                id="workspace-name"
                size="30"
                placeholder="LastName"
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                required
              />
              </div>
            </div>

{/* ----------------------------------------Registration No-------------------------------------------------------------       */}

            <div className="mv3">
              <label className="db lh-copy f6 mb1" htmlFor="workspace-url" style={{textAlign: 'left'}}>
                Registration No<span style={{color:'red'}}>*</span>
                {/* <span className="ml1" style={{ color: "#C0C0C0" }}>
                  {" "}
                  (optional)
              </span> */}
              </label>
              <div className="center urlButton br2 mt1">
            {/*<button class="dropbtn urlInput f6 br2 ph2 pv2">www.eden.com/</button>*/}
              <input
                className="f6 ph3 pv2 dib br2 black w-100"
                type="url"
                name="workspace-url"
                id="workspace-url"
                placeholder="2021DIFT200213"
                value={registraiton_no}
                onChange={(e)=>setRegistration(e.target.value)}
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                required
              />
              
              </div>
              
            </div>

{/* ----------------------------------------Department No-------------------------------------------------------------       */}

            <div className="mv3">
              <label className="db lh-copy f6 mb1" htmlFor="workspace-url" style={{textAlign: 'left'}}>
                Department<span style={{color:'red'}}>*</span>
                {/* <span className="ml1" style={{ color: "#C0C0C0" }}>
                  {" "}
                  (optional)
              </span> */}
              </label>
              <div className="center urlButton br2 mt1">
            {/*<button class="dropbtn urlInput f6 br2 ph2 pv2">www.eden.com/</button>
              <input
                className="f6 ph3 pv2 dib br2 black w-100"
                type="url"
                name="workspace-url"
                id="workspace-url"
                placeholder="Example"
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                required
              />
              */}

              <select name="Dept" id="dept"  style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              value={deparment}
                onChange={(e)=>setDepartment(e.target.value)}
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              defaultValue={'Select Department'}
              >

              <option value="Info Tech" >Information Technology</option>
              <option value="Comp">Computer Engineering</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Mech">Mechanical Engineering</option>
              <option value="Entc">Electronics Engineering</option>
              <option value="Electrical">Electrical Engineering</option>
              <option value="Ds">Data Science</option>
              <option value="Ai">Artificial Intelligence</option>
      
          </select>
              
              </div>
              
            </div>

{/* ----------------------------------------Roll No-------------------------------------------------------------       */}

            <div className="mv3">
              <label className="db lh-copy f6 mb1" htmlFor="workspace-url" style={{textAlign: 'left'}}>
                Roll No<span style={{color:'red'}}>*</span>
                {/* <span className="ml1" style={{ color: "#C0C0C0" }}>
                  {" "}
                  (optional)
              </span> */}
              </label>
              <div className="center urlButton br2 mt1">
            {/*<button class="dropbtn urlInput f6 br2 ph2 pv2">www.eden.com/</button>*/}
              <input
                className="f6 ph3 pv2 dib br2 black w-100"
                type="url"
                name="workspace-url"
                id="workspace-url"
                placeholder="Example"
                value={rollno}
                onChange={(e)=>setRollno(e.target.value)}
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "#EAEEF5",
                }}
                required
              />
              
              </div>
              
            </div>

            <div className="mv3">
              <label className="db lh-copy f6 mb1" htmlFor="workspace-url" style={{textAlign: 'left'}}>
                Division<span style={{color:'red'}}>*</span>
                {/* <span className="ml1" style={{ color: "#C0C0C0" }}>
                  {" "}
                  (optional)
              </span> */}
              </label>
              <div className="center urlButton br2 mt1">
            {/*<button class="dropbtn urlInput f6 br2 ph2 pv2">www.eden.com/</button>*/}
            <select name="Division" id="division"
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#EAEEF5",
            }}
            value={division}
            onChange={(e)=>setDivision(e.target.value)}
            className="f6 br2 ph3 pv2 mb2 dib black w-100"
            >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
                </select>
              
              </div>
              
            </div>
          </fieldset>
          <div className="Prev_next">
          <div className="">
            <input
              className="f6 grow br2 ph3 pv2 mb2 dib white"
              style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
              type="submit"
              value="Previous"
              onClick={() => onButtonClick("pageone")}
            />
          </div>

          <div className="">
            <input
              className="f6 grow br2 ph3 pv2 mb2 dib white"
              style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
              type="submit"
              value="Next" 
              onClick={SetInfo}
            />
          </div>
          </div>
        </form>
      </main>
    );
}

export default PageTwo;