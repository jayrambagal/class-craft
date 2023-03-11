import React, {useState} from "react";
import user from "./user.png";
import users from "./users.png";
import "./PageThree.css";

const PageThree = ({onButtonClick}) => {

  const [singleUser, setSingleUser] = useState(false)
  
  const onClickSingleUser = () => {
    setSingleUser(prevSingleUser => !prevSingleUser)
  }

  const [multiUser, setMultiUser] = useState(false)
  
  const onClickMultiUser = () => {
    setMultiUser(prevMultiUser => !prevMultiUser)
  }

    return (
      <main
        className="pt5 black-80"
        style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
      >
        <h2>Select your Subject</h2>
        <p style={{ color: "#C0C0C0" }}>
          Plz selecet your subject according to preferance.
        </p>
        <div
          className="center ph4 selectionDiv"
          style={{ width: "80%", height: "80%" }}
        >
          <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked"
            style={{borderColor: singleUser? '#664DE5' : '#EAEEF5' }}
            onClick={onClickSingleUser} 
          >
            <img
              src={user}
              className="h2 w2"
              title="single user icon"
              alt="user-icon"
            />
            <h1 className="f4 pl2 pr2">For myself</h1>
            <p className="lh-copy f6 black-70 pl2 pr2">
              Write better. Think more clearly. Stay organized.
            </p>
          </div>
          <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked"
           style={{borderColor: multiUser? '#664DE5' : '#EAEEF5' }}
           onClick={onClickMultiUser}
            >
            <img
              src={users}
              className="h2 w2"
              title="multi user icon"
              alt="users-icon"
            />
            <h1 className="f4 pl2 pr2">With my team</h1>
            <p className="lh-copy  f6 black-70 pl2 pr2 desc">
              Wikis, docs, tasks and projects, all in one place.
            </p>
          </div>
        </div>
        

        <input
          className="f6 grow br2 ph3 pv2 mb2 dib white submitButton"
          style={{
            borderStyle: "none",
            width: "20%",
            backgroundColor: "#664DE5",
          }}
          type="submit"
          value="Submit"
          onClick={() => onButtonClick("pagefour")}
        />
       
      </main>
    );
}

export default PageThree;