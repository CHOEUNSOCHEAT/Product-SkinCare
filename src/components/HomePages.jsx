import React, { useRef, useEffect } from 'react';


import { Link } from 'react-router-dom';
import ItemCard1 from './ItemCard1';


const bread1 = [
  {
    "id1": "13",
    "img": "https://static.thcdn.com/images/small/webp/widgets/135-en/29/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_12-023729.jpg",
    
  },
  {
    "id1": "14",
    "img": "https://static.thcdn.com/images/small/webp/widgets/135-en/26/original-0521_208401_ES_MB_Summer_Product_Card_Banners_x6_v3_5-012626.jpg",
   
  },
  {
    "id1": "15",
    "img": "https://static.thcdn.com/images/small/webp/widgets/135-en/20/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_11-023620.jpg",
   
  },
  {
    "id1": "16",
    img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/14/original-0521_208401_ES_MB_Summer_Product_Card_Banners_x6_v3_1-080214.jpg',
   
  },
  {
    "id1": "17",
    img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/53/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_09-023253.jpg',
   
  },
  {
    "id1": "18",
    img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/39/original-Eye_Gel_Masks_0614_208401_ES_MB_Summer_Eye_Masks_Product_Card_Banner_v1_%281%29-125239.jpg',


  },
  {
    "id1": "19",
    img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/24/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_01-011724.jpg',
   
  },
  {
    "id1": "20",
    img: 'https://static.thcdn.com/images/small/webp/widgets/135-en/13/original-0223_60126_THG0042197_ES_MB_ID_Menopause_Product_Card_Banners_x12_v2_04-012013.jpg',

  }
];

// Mapping bread items to render them
const popularList1 = bread1.map((coffee) => (
  <Link key={coffee.id1} className="col-12 col-sm-6 col-md-3 text-decoration-none" to={`/product1/${coffee.id1}`}>
    <ItemCard1 img={coffee.img} name={coffee.name} price={coffee.price} />
  </Link>
));




const HomePages = ({ section }) => {
  const homeRef = useRef(null);
  const brandsRef = useRef(null);
  const skincareRef = useRef(null);
  const skincareSetsRef = useRef(null);

  useEffect(() => {
    if (section === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === "brands" && brandsRef.current) {
      brandsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === "skincare" && skincareRef.current) {
      skincareRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === "skincareSets" && skincareSetsRef.current) {
      skincareSetsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);


  return (<>

<div>
      {/* Home Section */}
      <div ref={homeRef} id="home-section">
        {/* Home content */}
      </div>

      {/* Brands Section */}
      <div ref={brandsRef} id="brands-section">
        {/* Brands content */}
      </div>

      {/* Skincare Section */}
      <div ref={skincareRef} id="skincare-section">
        {/* Skincare content */}
      </div>

      {/* Skincare Sets Section */}
      <div ref={skincareSetsRef} id="skincareSets-section">
        {/* Skincare Sets content */}
      </div>

    </div>


    <div className="container w-100 mt-5">
      {/* Carousel Section */}
      <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.thcdn.com/images/large/webp/widgets/135-en/37/original-1010_528328_ES_ID_Warm_Up_Up_to_40_Off_UK_amend_1200_%C3%97_400-083137.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.thcdn.com/images/large/webp/widgets/135-en/39/original-0813_438533_ES_MH_Advent_Banner_Amend_05_1200_%C3%97_400_%282%29-130839.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src=" https://static.thcdn.com/images/xlarge/webp/widgets/135-en/52/original-1010_528328_ES_GS_Up_to_50_Off_Everything_Inc_Christmas_UK_1920_%C3%97_600-103452.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src=" https://static.thcdn.com/images/large/webp/widgets/135-en/46/original-0813_438533_ES_MH_Advent_Banner_Amend_20_1200_%C3%97_400-132246.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>

          
         
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Text Section */}
      <div className="text-center mt-5">
        <h4>Your Spa Sanctuary with ESPA</h4>
        <p>Immerse in powerful naturals for the mind, body, and spirit</p>
      </div>

      <div className="container mt-5">
  <div className="row g-3"> {/* g-3 for spacing between columns */}
    <div className="col-12 col-sm-6 col-md-2"> {/* Responsive columns */}
      <div className="card border-0">
        <Link to="/page1">  {/* Link to the desired route */}
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/135-en/19/original-Page-002-094419.png"
            alt="Image 1"
            className="img-fluid w-100"  // Makes image responsive
          />
        </Link>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-2">
      <div className="card border-0">
        <Link to="/page2">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/135-en/40/original-Page-007-150140.png"
            alt="Image 2"
            className="img-fluid w-100"
          />
        </Link>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-2">
      <div className="card border-0 ">
        <Link to="/page3">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/135-en/03/original-Page-001-094403.png"
            alt="Image 3"
            className="img-fluid w-100"
          />
        </Link>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-2">
      <div className="card border-0">
        <Link to="/page4">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/135-en/48/original-original-Page-003-094436-150248.png"
            alt="Image 4"
            className="img-fluid w-100"
          />
        </Link>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-2">
      <div className="card border-0">
        <Link to="/page5">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/135-en/11/original-original-Page-004-094500-150311.png"
            alt="Image 5"
            className="img-fluid w-100"
          />
        </Link>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-2">
      <div className="card border-0">
        <Link to="/page6">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/135-en/24/original-ESPA-Roundel-Spas_-_Untitled_Page-150424.png"
            alt="Image 6"
            className="img-fluid w-100"
          />
        </Link>
      </div>
    </div>
  </div>
</div>


      {/* Cards Section */}
      <div className="row mt-5 w-100 d-flex justify-content-center">
  {/* First Card */}
  <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4">
    <div className="card w-100 border-0">
      <div className="card-body">
        <Link to="/page7">
          <img
            src="https://static.thcdn.com/images/medium/webp/widgets/135-en/39/original-0201-STDCRE-46498-ES-MH-THG0042068-Sleep-Campaign-Shot05-1080x1080-103539.png"
            alt="Black Friday Offer"
            className="card-img-top w-100" // Makes the image responsive
          />
        </Link>
      </div>
      <div className="card-footer text-center bg-white" style={{ border: 'none' }}>
        <h5>Black Friday Offer: Up to 40% off</h5>
      </div>
    </div>
  </div>

  {/* Second Card */}
  <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4">
    <div className="card w-100 border-0">
      <div className="card-body">
        <Link to="/page8">
          <img
            src="https://static.thcdn.com/images/medium/webp/widgets/135-en/43/original-0603_194527_ES_RP_Christmas_Batching_Lifestyle_Shot12_1080x1080-103143.jpg"
            alt="Wellness Wonders Collection"
            className="card-img-top w-100" // Makes the image responsive
          />
        </Link>
      </div>
      <div className="card-footer text-center bg-white" style={{ border: 'none' }}>
        <h5>Wellness Wonders Collection</h5>
      </div>
    </div>
  </div>
</div>



      {/* // ESPA Favourites */}
      <div className="container my-5 w-100">
         {/* <h3 className='text-center fw-medium text-success '>ESPA Favourites</h3> */}
         <div className="container w-100 mt-5">
        {/* Carousel Section */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Add carousel items */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Text Section */}
        <div className="text-center mt-5">
          <h4>Your Spa Sanctuary with ESPA</h4>
          <p>Immerse in powerful naturals for the mind, body, and spirit</p>
        </div>

        {/* Products Section */}
        <div className="container w-100 mt-5">
     
<div className="container w-100  mt-5 text-center text-success" >
<div className=''> <h3>ESPA Favourites and Popular  </h3>
__________________
</div>
    <div className="row  mt-5 fw-bold fs-1 w-100">{popularList1}

    </div>
  </div>

        {/* More sections like logos, etc. */}
      </div>

      {/* Logos and other sections */}
    </div>
      </div>

         
        
         </div>

         {/* //Logo */}
     



    


     
    </>
  );
};

export default HomePages;




















