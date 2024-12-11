import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


const ProductSkins= () => {
  const [listProduct, setListProduct] = useState([]);
  const [listCartProduct, setListCartProduct] = useState([]);
  const [qty, setQty] = useState(0); // Total number of items in the cart

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = listCartProduct.findIndex(
      (cartProduct) => cartProduct.product_id === product.id
    );

    if (existingProductIndex === -1) {
      // If not, add a new product to the cart
      setListCartProduct((prevList) => [
        ...prevList,
        {
          product_id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          qty: 1, // Initialize quantity to 1
        },
      ]);
      setQty((prevQty) => prevQty + 1); // Increment the total quantity of products
    } else {
      // If the product exists, update the quantity (do not add a new product)
      const updatedCart = listCartProduct.map((cartProduct) => {
        if (cartProduct.product_id === product.id) {
          return { ...cartProduct, qty: cartProduct.qty + 1 };
        }
        return cartProduct;
      });
      setListCartProduct(updatedCart);
      setQty((prevQty) => prevQty + 1); // Increment the total quantity of products
    }
  };

  // Function to increment product quantity in cart
  const incrementQty = (productId) => {
    const updatedCart = listCartProduct.map((product) => {
      if (product.product_id === productId) {
        return { ...product, qty: product.qty + 1 };
      }
      return product;
    });
    setListCartProduct(updatedCart);
    setQty((prevQty) => prevQty + 1); // Update the total quantity of products
  };

  // Function to decrement product quantity in cart
  const decrementQty = (productId) => {
    const updatedCart = listCartProduct.map((product) => {
      if (product.product_id === productId && product.qty > 1) {
        return { ...product, qty: product.qty - 1 };
      }
      return product;
    });
    setListCartProduct(updatedCart);
    setQty((prevQty) => prevQty - 1); // Update the total quantity of products
  };

  // Calculate total price for each cart item
  const getCartItemTotalPrice = (product) => {
    return product.qty * product.price;
  };

  // Calculate total price of all cart items
  const getTotalCartPrice = () => {
    return listCartProduct.reduce((total, product) => total + getCartItemTotalPrice(product), 0);
  };

  // Fetch products on page load
  useEffect(() => {
    fetch('data/Bestsellers.json')
      .then((response) => response.json())
      .then((data) => {
        const tempList = data.map((product) => (
          
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card my-4 position-relative">
            {/* Sale Badge */}
           
        
            <div className="card-body p-0 bg-light">
              {/* Product Image */}
              <img className="w-100 m-0 rounded-top-2" src={product.image} alt={product.name} />
            </div>
        
            <div className="card-footer text-center">
              <p className="m-0">{product.name}</p>
              <p className="m-0">${product.price}</p>
              
              <button
                onClick={() => addToCart(product)} // Add to Cart button functionality
                className="btn btn-primary mt-3"
              >
                <FontAwesomeIcon icon={faCartPlus} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        
        ));
        setListProduct(tempList);
      });
  }, []);

  return (<>
   <div className="container  mt-5 text-center" style={{color:"#395542"}}>
    <h2>Bestseller</h2>
    ______________
    </div>
    <div className="container">
      <div className="d-flex justify-content-end">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
          className="btn btn-primary px-5  d-flex">
            <div className='fs-5'> <FontAwesomeIcon icon={faCartPlus} /> </div>
            
          <span className="badge text-bg-danger rounded-circle ">{qty}</span>
          
        </button>

        {/* Modal for Cart */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Cart's Product List
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Display only the first 3 products */}
                {listCartProduct.slice(0, 16).map((cartProduct) => (
                  <div key={cartProduct.product_id} className="container rounded-1 border border-1 my-2">
                    <div className="d-flex me-5 mt-2">
                      <img style={{ height: '75px' }} src={cartProduct.image} alt={cartProduct.name} />
                      <div className="ms-5 mt-2">
                        <h6>{cartProduct.name}</h6>
                      </div>
                      <div className="ms-4 mt-1"><p>${cartProduct.price}</p></div>
                    </div>
                    <div className="d-flex justify-content-center align-items h-25">
                      <div
                        className="fs-6 btn btn-danger"
                        onClick={() => decrementQty(cartProduct.product_id)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </div>
                      <label className="fs-6 mx-3">{cartProduct.qty}</label>
                      <div
                        className="fs-6 btn btn-primary"
                        onClick={() => incrementQty(cartProduct.product_id)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                    <div className="text-end">
                      <h6>Total: US ${getCartItemTotalPrice(cartProduct).toFixed(2)}</h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <div className="w-100 text-end">
                  <div className="d-flex">
                    <h5>Total Cart Price:</h5>
                    <h5 className="ms-5 text-success">${getTotalCartPrice().toFixed(2)}</h5>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">{listProduct}</div>
    </div>
    </>
  );
};

export default  ProductSkins;
