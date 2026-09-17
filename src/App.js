import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
// import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enable", "Success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "Success");
    }
  };
  return (
      <><Navbar
      tittle="Navbar2"
      DropdownText="About"
      mode={mode}
      toggleMode={toggleMode} /><Alert alert={alert} /><div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Please share your update "
          mode={mode} />
      </div></>
  );
}

export default App;
