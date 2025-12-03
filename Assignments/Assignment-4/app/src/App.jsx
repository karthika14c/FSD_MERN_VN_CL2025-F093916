import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Departments from "./pages/Departments"
import DepartmentDetails from "./pages/DepartmentDetail"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root d-flex flex-column min-vh-100">
        <Header />

        <main className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<DepartmentDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
