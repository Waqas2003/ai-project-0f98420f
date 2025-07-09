import React, { useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('https://api.example.com/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="row">
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            {cart[productId].name} x {cart[productId].quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${Object.values(cart).reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
}

export default Cart;