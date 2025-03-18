import { useState } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/home"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </>
  )
}

export default App