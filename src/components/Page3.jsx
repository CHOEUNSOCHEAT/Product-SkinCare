import React, { useState } from 'react';
import Footer from './Footer';
const Page3 = () => {
  // Example product data
  const initialProducts = [
    {
      id: 1,
      name: "Optimal skin Serum",
      image: "https://static.thcdn.com/images/small/webp//productimg/original/12595874-1975192212694832.jpg",
      price: 55.33,
      quantity: 0,
    },
    {
      id: 2,
      name: "Pomelo Lip Balm",
      image: "https://static.thcdn.com/images/small/webp//productimg/original/12226528-5245192192431695.jpg",
      price: 30.77,
      quantity: 0,
    },
    {
      id: 3,
      name: "Optimal Moisturiser",
      image: "https://static.thcdn.com/images/small/webp//productimg/original/12595873-2475192212412688.jpg",
      price:44.99 ,
      quantity: 0,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [total, setTotal] = useState(0);

  // Calculate the total cost for all products
  const calculateTotal = () => {
    const totalCost = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotal(totalCost);
  };

  // Handle quantity change (increase or decrease)
  const handleQuantityChange = (id, operation) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        if (operation === 'increase') {
          product.quantity += 1;
        } else if (operation === 'decrease' && product.quantity > 0) {
          product.quantity -= 1;
        }
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotal();  // Recalculate the total whenever quantity changes
  };

  // Handle "Add to Cart" button click
  const handleAddToCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.quantity += 1;  // Increase quantity by 1 when added to the cart
      }
      return product;
    });
    setProducts(updatedProducts);
    calculateTotal();  // Recalculate the total whenever quantity changes
  };

  return (<>
    <div className="container mt-5">
      <h2 className='text-success text-center'>Product Christmas</h2>
      <h2 className='text-success text-center'>________ </h2>

      {/* Display all product images in a grid */}
      <div className="row g-3 mt-5">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card w-100 border-0">
              <div className="card-body">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover' }} // Restrict image height for uniformity
                />
              </div>
              <div className="card-footer text-center">
                <h6 className="card-title">{product.name}</h6>
                <h6>${product.price}</h6>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleAddToCart(product.id)} // Add to cart functionality
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Table */}
      <div className="container mt-5">
          <h4 className="text-success">Product List</h4>

          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <button
                        onClick={() => handleQuantityChange(product.id, 'decrease')}
                        className="btn btn-danger btn-sm me-3"
                        disabled={product.quantity <= 0} // Disable decrease if quantity is 0
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        onClick={() => handleQuantityChange(product.id, 'increase')}
                        className="btn btn-success btn-sm ms-3"
                      >
                        +
                      </button>
                    </td>
                    <td><strong>${product.price * product.quantity}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Display the total cost */}
          {total > 0 && (
            <div className="mt-4 d-flex justify-content-between align-items-center bg-light p-3 rounded">
              <h4 className="text-success">Total Cost of All Products:</h4>
              <h4 className="text-danger">${total}</h4>
            </div>
          )}
        </div>
    </div>
     <div>
     < Footer/>
    </div>
    </>
  );
};

export default Page3;
