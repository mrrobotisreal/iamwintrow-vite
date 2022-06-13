import { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar.jsx';
import Home from  './Home/Home.jsx';

function App() {
  // STATE
  const [darkMode, setDarkmode] = useState(true);

  // HANDLERS
  function toggleDarkMode(e) {
    setDarkmode(!darkMode);
  }

  return (
    <div style={{backgroundColor: darkMode ? 'black' : 'white'}}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
    </div>
  )
}

export default App
