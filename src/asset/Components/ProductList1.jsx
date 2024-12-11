import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard1 from './ItemCard1';

const brands = [
  {
    "id1": "1", 
    "name": " COSRX",
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/04/cosrx_hover.png"
},
{
    "id1": "2", 
   "name": "LANEIGE",

    "img": "https://www.tofusecret.com/wp-content/uploads/2020/04/laneige.png"
},
{
    "id1": "3", 
    "name": "DR.Jart+",

    "img": "https://www.tofusecret.com/wp-content/uploads/2020/04/drjart.png"
},
{
    "id1": "4", 
   "name": "Innisfree",
  
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/04/innisfree.png"
},
{
    "id1": "5", 
    "name": "SK-II",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/08/Banila-Co-Clean-It-Zero-Special-Duo_1.jpg"
},
{
    "id1": "6", 
    "name": "Shiseido ",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/shiseido_hover.png"
},
{
    "id1": "7", 
    "name": "Gold Energy Snail Synergy ",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/goldenergy_hover.png"
},
{
    "id1": "8", 
    "name": "Sulwhasoo",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/sulwhasoo_hover.png"
},

{
    "id1": "9", 
    "name": "IT's Skin",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/itsskin_hover.png"
},
{
    "id1": "10", 
    "name": "MediHeal",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/mediheal_hover.png"
},
{
    "id1": "11", 
    "name": "SENKA",
 
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/senka_hover.png"
},
{
    "id1": "12", 
    "name": "JM Solution",
   
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/04/jmsolution.png"
}

];

// Mapping bread items to render them
const popularList1 = brands.map((brand) => (
  <Link key={brand.id1} className="col-12 col-sm-6 col-md-3 my-5 fs-1 text-decoration-none" to={`/product1/${brand.id1}`}>
    <ItemCard1 img={brand.img} name={brand.name} price={brand.price} />
  </Link>
));

const ProductList1 = () => (
  <div className="container  mt-3 text-center" style={{color:"#395542"}}>
    <h2>Brands</h2>
    ______________
    {/* <h1 style={{ fontSize: "20px", marginTop: "10px" }}>Cake</h1> */}
    <div className="row  mt-4 fw-bold fs-1 w-100">{popularList1}</div>
  </div>
);

export default ProductList1;









