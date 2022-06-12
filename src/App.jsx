import { useState } from 'react'
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
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
    </>
  )
}

export default App
