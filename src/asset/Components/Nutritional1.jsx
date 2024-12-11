import React, { useState } from 'react';

const NutritionalTable1 = ({ data, price }) => {
  const [qty, setQty] = useState(0); // State to handle quantity
  
  // Functions to increase or decrease the quantity
  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => qty > 0 && setQty(qty - 1);

  // Calculate total price based on quantity and price
  const total = qty * price;

  return (
    <>
     <div className="w-100 h-auto mt-5 ">
  <div className="table-container d-flex flex-wrap justify-content-between w-100 mt-3 me-3">
  
    {/* Product Brands Table 1 */}
    <div className="table-responsive w-100 col-12 col-md-6 mb-1 d-flex ">
      <table className="table table-bordered me-3 " style={{borderRadius:"10px", borderCollapse:"collapse", color:"#395542", border:"5px #395542"}}>
        <thead className="thead-light">
          <tr>
            <th className='text-danger' colSpan={2} style={{color:"#395542"}}>Product Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td >1</td>
            <td className='text-primary'>COSRX One Step Green Hero Calming Pad</td>
          </tr>
          <tr>
            <td>2</td>
            <td >Laneige Cream Skin Refiner</td>
          </tr>
          <tr>
            <td>3</td>
            <td className='text-primary'>Dr. Jart+ V7 Pink Toning Cream</td>
          </tr>
          <tr>
            <td>4</td>
            <td >Innisfree Green Tea Foam Cleanser</td>
          </tr>
          <tr>
            <td> 5</td>
            <td className='text-primary'>SK-II Facial Treatment Clear Lotion</td>
          </tr>
          <tr>
            <td>6</td>
            <td >Shiseido Ultimune Power Infusing Concentrate</td>
          </tr>
        </tbody>
      </table>


      <table className="table table-bordered" style={{borderRadius:"10px", borderCollapse:"collapse", color:"#395542", border:"5px #395542"}}>
        <thead className="thead-light">
          <tr>
            <th className='text-danger' colSpan={2} style={{color:"#395542"}}>Product Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td >1</td>
            <td className='text-primary'>COSRX One Step Green Hero Calming Pad</td>
          </tr>
          <tr>
            <td>2</td>
            <td >Laneige Cream Skin Refiner</td>
          </tr>
          <tr>
            <td>3</td>
            <td className='text-primary'>Dr. Jart+ V7 Pink Toning Cream</td>
          </tr>
          <tr>
            <td>4</td>
            <td >Innisfree Green Tea Foam Cleanser</td>
          </tr>
          <tr>
            <td> 5</td>
            <td className='text-primary'>SK-II Facial Treatment Clear Lotion</td>
          </tr>
          <tr>
            <td>6</td>
            <td >Shiseido Ultimune Power Infusing Concentrate</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  

  </div>

  {/* Price Table */}
  <div className="table-responsive w-100 mt-5">
    <table className="table table-bordered" style={{borderRadius:"10px", borderCollapse:"collapse", color:"#395542", border:"5px #395542"}}>
      <tbody>
        <tr>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{price} $</td>
          <td>{qty}</td>
          <td>{total.toFixed(2)} $</td>
        </tr>
      </tbody>
    </table>
  </div>  

  {/* Quantity Selection */}
  <div className="fs-4 mt-4">
    <label htmlFor="" className='fw-bold fs-5'>Quantity:</label>
    <button className='btn btn-danger ms-3 me-3' onClick={decrementQty}>-</button>
    <label htmlFor="">{qty}</label>
    <button className='btn btn-success ms-3' onClick={incrementQty}>+</button>
  </div>
</div>

    </>
  );
};

export default NutritionalTable1;
