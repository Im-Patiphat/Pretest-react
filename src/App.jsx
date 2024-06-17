import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Search,Meru } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h3>Grab Restaurant</h3>
        <Search></Search>
        <Meru></Meru>
      </div>
    </>
  );
}

export default App
