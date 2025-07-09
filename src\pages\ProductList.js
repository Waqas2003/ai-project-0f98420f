import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4">
          <div className="card">
            <img src={product.image} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;