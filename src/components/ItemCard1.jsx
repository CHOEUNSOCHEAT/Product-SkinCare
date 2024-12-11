import React from 'react';


const ItemCard1 = ({ img, name,price, nutritionalData1 }) => (
  <div className="row ">
    <div className="card col-6 w-100  " style={{ border: "none" }}>
      <div className="card-body p-0 w-100">
        <img className="w-100 rounded-2" src={img} />
      </div>
      <div className="card-footer text-center mt-2 bg-white" style={{ border: "none" }}>
        <p className="my-0 fs-6 fw-bold" style={{ color: "#00754A" }}>{name}</p>
        <p className="my-0 fs-6 fw-bold" style={{ color: "#00754A" }}>{price}</p>
        
      </div>
    </div>
    <div className="col-6">
      {nutritionalData1 && <NutritionalTable1 data={nutritionalData1} />}
    </div>
  </div>
);

// Assuming NutritionalTable is a separate component
const NutritionalTable1 = ({ data }) => {
  return (
    <div>
      {/* Render the table using the data prop */}
      {/* Use a similar structure as your current table */}
    </div>
  );
};


export default ItemCard1;

