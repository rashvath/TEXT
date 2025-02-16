import { useState } from 'react'; 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,  // ✅ Use Routes instead of Switch
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark Mode Has Been Enabled', 'Success');
      document.title = "TextEase - Dark mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode Has Been Enabled', 'Success');
      document.title = "TextEase - Light mode";
    }
  };

  return (
    <>
    <Router>
<Navbar title="Project React" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>  {/* Used Routes instead of Switch */}
            <Route exact path="/about" element={<About />} /> 
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
