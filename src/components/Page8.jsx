import React, { useState } from 'react';
import Footer from './Footer';

const Page8 = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Harmonising Hydration Collection',
      price: 290.99,
      qty: 0,
      images: [
        'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14869507-1585192379753474.jpg',
        'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14869507-1425192379728778.jpg',
        'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14869507-1875192379814395.jpg',
        'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14869507-1935192379795831.jpg'
      ]
    }
  ]);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) newQty = 1;
    setProducts(products.map(product =>
      product.id === id ? { ...product, qty: newQty } : product
    ));
  };

  const getProductTotal = (product) => product.price * product.qty;
  const getGrandTotal = () => products.reduce((total, product) => total + getProductTotal(product), 0);

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-success text-center">Product List</h4>
        <h4 className="text-success text-center">_____________________</h4>
        <div className="row mt-4 w-100">
          {products.map((product) => (
            <div key={product.id} className=" col-12 col-sm-12 col-md-12 col-lg-12 mt-3 d-flex justify-content-center ">
              <div className="card  border-0 ">
                {/* Carousel for product images */}
                <div id={`carouselProduct${product.id}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                  <div className="carousel-inner">
                    {product.images.map((image, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img style={{ objectFit: 'cover',objectPosition:"center center"}} src={image} className="w-100 " alt={`Product ${product.id} Image ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselProduct${product.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#carouselProduct${product.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon text-bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="card-body mt-4 d-flex flex-column align-items-center justify-content-center">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-3 gap-3">
                    {/* Price */}
                    <div className="text-center text-sm-start">
                      <p className="card-text mb-0">Price: ${product.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-danger btn-lg"
                        onClick={() => updateQuantity(product.id, product.qty - 1)}
                        disabled={product.qty <= 0}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="mx-2">{product.qty}</span>
                      <button
                        className="btn btn-success btn-lg"
                        onClick={() => updateQuantity(product.id, product.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <p className="card-text mt-3 text-center">
                    Total: ${getProductTotal(product).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Total */}
        <div className="mt-4 d-flex justify-content-between align-items-center bg-light p-3 rounded">
          <h4 className="text-success">Grand Total:</h4>
          <h4 className="text-danger">{`$${getGrandTotal().toFixed(2)}`}</h4>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page8;


