import React from "react"
import { Link, Outlet , Routes, Route } from "react-router-dom"

const Products = () => {

  const Electronics = () => (
    <div className="alert alert-info">
      <h3>Electronics</h3>
      <p>Latest gadgets, mobiles, laptops, and accessories.</p>
    </div>
  )

  const Fashion = () => (
    <div className="alert alert-warning">
      <h3>Fashion</h3>
      <p>Trendy clothes, shoes, and lifestyle products.</p>
    </div>
  )

  return (
   <div style={{ padding: "20px" }}>
      <h2>Products Page</h2>

      <div className="btn-group mb-4">
        <Link to="electronics" className="btn btn-primary">
          Electronics
        </Link>
        <Link to="fashion" className="btn btn-secondary">
          Fashion
        </Link>
      </div>

      <Routes>
        <Route path="electronics" element={<Electronics />} />
        <Route path="fashion" element={<Fashion />} />
      </Routes>
      <Outlet />
    </div>
  )
}

export default Products;
