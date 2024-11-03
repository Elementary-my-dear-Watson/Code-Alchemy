import { useState } from 'react'
import Project from './components/Project'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Project />
    </>
  )
}

export default App
