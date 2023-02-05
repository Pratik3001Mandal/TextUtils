import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const selectGreenMode = () =>{
    let labelselected = document.getElementById("greenModeLabel").innerText;
    if(labelselected === "Green Mode"){
      setMode("#226422");
      document.body.style.backgroundColor = "#37a137";
      showAlert("Green mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }

  const selectRedMode = () =>{
    let labelselected = document.getElementById("redModeLabel").innerText;
    if(labelselected === "Red Mode"){
      setMode("#b11515");
      document.body.style.backgroundColor = "#f15454";
      showAlert("Red mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }

  const toggleDarkMode = () => {
    let switchChecked = document.getElementById('flexSwitchCheckDefault').checked;
    if(switchChecked){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }    
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" 
              mode={mode} 
              toggleDarkMode={toggleDarkMode} 
              selectGreenMode={selectGreenMode}
              selectRedMode={selectRedMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
