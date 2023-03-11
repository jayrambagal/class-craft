import React from "react";
import "./PageOne.css";
import { NavLink } from "react-router-dom";

const PageOne = ({ onButtonClick}) => {

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "50%", maxHeight: "30%", margin: "auto" }}
    >
      <form className="measure" >
        <h2>Welcome to ClassCraft !</h2>
        <p style={{ color: "#C0C0C0" }}>You can Choose your subject.</p>
        { /*<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
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
          
            </fieldset> */}
        
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
            }}
            type="submit"
            value="Next"
            onClick={() => onButtonClick("pagetwo")}
          />
        </div>
      </form>
    </main>
  );
};

export default PageOne;
