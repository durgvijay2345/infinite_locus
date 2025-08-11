import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path = "/about" element={<About/> } />
      </Routes>
      
      </BrowserRouter>
         
    </>
  )
}

export default App
