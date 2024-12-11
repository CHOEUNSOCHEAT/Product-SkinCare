import React from 'react'
import { useParams } from 'react-router-dom';
import NutritionalTable1 from './Nutritional1';
import Footer from '../../components/Footer';

const brands = [
  {
    "id1": "1", 
    "name": " 	COSRX One Step Green Hero Calming Pad",
    price: "19.89", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/03/COSRX-One-Step-Green-Hero-Calming-Pad_1.png"
},
{
    "id1": "2", 
   "name": "Laneige Cream Skin Refiner",
   price: "10.67", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/02/Laneige-Cream-Skin-Refiner-_1.jpg"
},
{
    "id1": "3", 
    "name": "Dr. Jart+ V7 Pink Toning Cream",
    price: "72.86", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/07/Dr-Jart-V7-Pink-Toning-Cream.jpg"
},
{
    "id1": "4", 
   "name": "Innisfree Green Tea Foam Cleanser",
   price: "15.60", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/02/Innisfree-Green-Tea-Foam-Cleanser_1.jpg"
},
{
    "id1": "5", 
    "name": "SK-II Facial Treatment Clear Lotion",
    price: "33.94", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/07/SK-II-Facial-Treatment-Clear-Lotion_1.jpg"
},
{
    "id1": "6", 
    "name": "Shiseido Ultimune Power Infusing Concentrate ",
    price: "44.44", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/07/Shiseido-Ultimune-Power-Infusing-Concentrate-2.jpg"
},
{
    "id1": "7", 
    "name": "Gold Energy Snail Synergy ",
    price: "88.77", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2020/06/sulwhasoo_hover.png"
},
{
    "id1": "8", 
    "name": "Sulwhasoo Bloomstay Vitalizing Water ",
    price: "68.96", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/07/Sulwhasoo-Bloomstay-Vitalizing-Water_1.jpg"
},

{
    "id1": "9", 
    "name": "Ya-Man Photo Plus EX Eye Pro",
    price: "739.00", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2022/11/Ya-Man-Photo-Plus-EX-Eye-Pro-2.jpeg"
},
{
    "id1": "10", 
    "name": "Mediheal Line Friends I.P.I Lightmax Ampoule Mask",
    price: "21.17", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/06/Mediheal-Line-Friends-I.P.I-Lightmax-Ampoule-Mask1.jpg"
},
{
    "id1": "11", 
    "name": "Shiseido SENKA Perfect Whip",
    price: "9.97", 
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/06/SENKA-Perfect-Whip_1.jpg"
},
{
    "id1": "12", 
    "name": "JM Solution",
    price: "15.60",
    "img": "https://www.tofusecret.com/wp-content/uploads/2019/06/JMsolution-ROYAL-PROPOLIS-EYE-PATCH-60piece.jpg"
},
{
  "id1": "13",
  "img": "https://static.thcdn.com/images/small/webp/widgets/135-en/29/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_12-023729.jpg",
  "name": "Ultra-rich nourishing",
   price: "25.99",
},
{
  "id1": "14",
  "img": "https://static.thcdn.com/images/small/webp/widgets/135-en/26/original-0521_208401_ES_MB_Summer_Product_Card_Banners_x6_v3_5-012626.jpg",
  "name": "Intensely nourishing",
  price: "30.99",
},
{
  "id1": "15",
  "img": "https://static.thcdn.com/images/small/webp/widgets/135-en/20/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_11-023620.jpg",
  "name": "Brightening super serum",
  price: "45.99",
},
{
  "id1": "16",
  img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/14/original-0521_208401_ES_MB_Summer_Product_Card_Banners_x6_v3_1-080214.jpg',
  "name": "Nutrient Rich",
  price: "30.99",
},
{
  "id1": "17",
  img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/53/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_09-023253.jpg',
  "name": "Clarifying blend",
  price: "29.99",
},
{
  "id1": "18",
  "name": "Hydrating eye patches",
  img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/39/original-Eye_Gel_Masks_0614_208401_ES_MB_Summer_Eye_Masks_Product_Card_Banner_v1_%281%29-125239.jpg',
  price: "19.99",

},
{
  "id1": "19",
  
  "name": "Luxurious yet light light",
  img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/24/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_01-011724.jpg',
  price: "29.99",
},
{
  "id1": "20",
  "name": "Hydrating toner",
  img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/13/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_04-012013.jpg',
  price: "19.99",

}
];

  const ProductDetail1 = () => {
    const { id1 } = useParams(); // Get the product id from the URL
    const product1 = brands.find((item) => item.id1 === id1); // Assuming `bread` is your product data array
  
    if (!product1) {
      return <div>Product not found</div>;
    }
  
    return (<>
      <div className="container-fluid m-0 p-0 border-0">
      <div className="container-fluid m-0 p-0 w-100 d-flex shadow justify-content-evenly bg-body-tertiary" style={{ height: "80px",  }}>
        <h6 className='mt-4'>{product1.name} #{product1.id1} </h6>
        <h6 className='mt-4 '>Brand's Skin Care Products</h6>
      </div>
    
      <div className="container w-100 d-flex flex-column flex-md-row justify-content-between mt-5">
        {/* Card Section */}
        <div className="card w-50 h-25 w-md-50 rounded-4 mt-4 me-md-5 border-0">
          <div className="card-body">
            <img src={product1.img} alt={product1.name} className="rounded-4 w-100" />
          </div>
    
          <div className="card-footer w-100 border-0">
            <h5 className="text-center text-success">{product1.name}</h5>
            <h5 className="text-center fw-bold text-danger">{product1.price} $</h5>
          </div>
        </div>
    
        {/* Nutritional Table */}
        <div className="w-100 mt-5 mt-md-0">
          <NutritionalTable1 data={product1.nutritionalData} price={product1.price} />
        </div>
      </div>
    </div>
     
       <div>
        < Footer/>
       </div>
    </>

    
    
    );
  };


export default ProductDetail1



