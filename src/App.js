import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042751';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtilsPro - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtilsPro - Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtilsPro" about="About US" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    <Alert alert={alert} showAlert={showAlert} />
    <div className="container my-3" mode={mode}>
      <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Text heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
      </Routes>
    </div>
    </BrowserRouter>
  
    </>
  );
}

export default App;
