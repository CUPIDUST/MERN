import React, { useState } from 'react';
import Navbar from './components/Navbar'
// import About from './components/About'
import Textarea from './components/Textarea'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = "black";
      setMyStyle({ backgroundColor: "black", color: "white" });
      showAlt("Dark Mode Is Enabled", "Sucess");
      document.title = "TextUtils-Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },1500)
      // setInterval(()=>{
      //   document.title="TextUtils-Dark Mode";
      // },1000)
    } else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      setMyStyle({ backgroundColor: "white", color: "black" });
      showAlt("Light Mode Is Enabled", "Sucess");
      document.title = "TextUtils-Light Mode";
    }
  }
  const [textColor, setTextColor] = useState("dark");
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white", color: "black"
  });

  //for alert
  const [alt, setAlt] = useState(null);
  let showAlt = (msg, type) => {
    setAlt({ msg: msg, type: type })
    setTimeout(() => {
      setAlt(null);
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} textColor={textColor} />
      <Alert alert={alt} />
      {/* <div className="container"> */}
      {/* <Switch> */}
      {/* <Route path="/about"> */}
      {/* <About /> */}
      {/* </Route> */}
      {/* <Route path="/"> */}
      <Textarea heading="Enter Your Text Below" myStyle={myStyle} showAlt={showAlt} />
      {/* </Route> */}
      {/* </Switch> */}
      {/* </div></Router> */}
    </>
  );
}

export default App;