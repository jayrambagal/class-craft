import Logo from "./components/Logo/Logo";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";
import PageThree from "./components/PageThree/PageThree";
import PageFour from "./components/PageFour/PageFour";
import "./App.css";
import React, { useState } from "react";
import tachyons from "tachyons";
import MultiStepProgressBar from "./components/MultiStepProgressBar/MultiStepProgressBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  const history = useNavigate();
  const callAboutPage = async () =>{
    try{
      const res = await fetch("/home",
      {
        method:'GET',
        headers:{Accept:'application/json',
                "Contact-Type":'application/json'
                },
        credentials:'include'
      })
      console.log(res.status)
      const data = res.json()
      if(!res.status===200 || !data){
        console.log(data);
        throw new Error("user not found")
      }else if(res.status === 401 || res.status===403){
        history('/')
      }
    }catch(error){
        console.log(error);
    }
  }
  useEffect(()=>{
    callAboutPage();
  })

  return (
    <div className="App">
      <Logo />
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <PageFour />,
        }[page]
      }
    </div>
  );
}

export default App;
