import React from 'react';
import axios from 'axios';

function Checkout() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.post('https://api.example.com/checkout')
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="row">
      <h1>Checkout</h1>
      <p>Order ID: {order.id}</p>
      <p>Total: ${order.total}</p>
      <p>Thank you for your order!</p>
    </div>
  );
}

export default Checkout;