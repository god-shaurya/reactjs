// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import Aboutus from './components/Aboutus';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


let name = "shaurya";
function App() {
  const [mode, setMode] = useState("light")
  const [swtxt, setSwtxt] = useState("Light mode Enabled")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }


  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      setSwtxt("Dark mode Enabled")
      document.body.style.backgroundColor = "black"
      showAlert("Dark Mode Enabled", "success")
      // document.title = "Text utils -DARK MODE"
      // setInterval(() => {
      //   document.title = "Install textutils now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "It is amazing"
      // }, 1500);

    }
    else {
      setMode("light")
      setSwtxt("Light mode Enabled")
      document.body.style.backgroundColor = "white"
      showAlert("light Mode Enabled", "success")
      document.title = "Text utils -Home"
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} swtxt={swtxt} />
        <Alert alert={alert} />

        {/* <div className="container"><Aboutus /></div> */}
        <Routes>
        <Route path='/Aboutus' element={<Aboutus mode={mode}/>} />
        <Route path='/' element={<div className="container my-3" ><FormText mode={mode} showAlert={showAlert} /></div>} />

          
        </Routes>
            


      </Router>

    </>
  );
}

export default App; 
