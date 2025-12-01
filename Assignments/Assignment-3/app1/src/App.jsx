import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Components/question19/Home'
import About from './Components/question19/About'
import Products from './Components/question19/Product'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1 from './Components/Question1'
import Question2 from './Components/Question2'
import Profiles from './Components/Profiles'
import Question4 from './Components/Question4'
import Question5 from './Components/Question5'
import Question6 from './Components/Question6'
import Question3 from './Components/Question3'
import Question7 from './Components/Question7'
import Question8 from './Components/Question8'
import Question9 from './Components/Question9'
import Question10 from './Components/Question10'
import Question11 from './Components/Question11'
import Question12 from './Components/Question12'
import Question13 from './Components/Question13'
import Question14 from './Components/Question14'
import Question15 from './Components/Question15'
import Question16 from './Components/Question16'
import Question17 from './Components/Question17'
import Question18 from './Components/Question18'

function App() {


  return (
    <>
      {/* <Question1/> */}
      {/* <Question2/> */}
      {/* <Profiles/> */}
      {/* <Question4/> */}
      {/* <Question5/> */}
      {/* <Question6/> */}
      {/* <Question7/> */}
      {/* <Question8/> */}
      {/* <Question9/> */}
      {/* <Question10/> */}
      {/* <Question11/> */}
      {/* <Question12/> */}
      {/* <Question13/> */}
      {/* <Question14/> */}
      {/* <Question15/> */}
      {/* <Question16/> */}
      {/* <Question17/> */}
      {/* <Question18/> */}
      <BrowserRouter>
        <div style={{ padding: "20px" }}>
          <nav style={{ marginBottom: "20px" }}>
            <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
            <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
            <Link to="/products">Products</Link>
          </nav>
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />


            <Route path="/products" element={<Products />}>

              <Route path="electronics" element={<h3>Welcome to Electronics Products</h3>} />
              <Route path="fashion" element={<h3>Explore Fashion Products</h3>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
