import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Question11 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Loading products...</p>;

  return (
    <div className="container mt-5">
    <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((pro) => (
          <div className="col-md-4 mb-4" key={pro.id}>
            <div className="card h-100">
              <img 
                src={pro.thumbnail} 
                className="card-img-top" 
                alt={pro.title} 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{pro.title}</h5>
                <p className="card-text">{pro.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ${pro.price}</li>
                <li className="list-group-item">Brand: {pro.brand}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question11;
