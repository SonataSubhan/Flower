import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css";
import BloomingRose from './flower.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BloomingRose />
  )
}

export default App
