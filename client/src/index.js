import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import ForgetPass from "./components/Login/ForgetPass";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <StrictMode>
    
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/home" element={<App/>}></Route>
    <Route path="/forget" element={<ForgetPass/>} />
    
    </Routes>
  </StrictMode>
  </BrowserRouter>
);
