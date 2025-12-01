import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import products from "../data/data.json"

const Question10 = () => {

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product List</h2>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question10
