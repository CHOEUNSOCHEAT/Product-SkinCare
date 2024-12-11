import ItemCard1 from "./ItemCard1";

const popularList1 = brands.map((breadItem1) => {
    if (parseFloat(breadItem1.rate) >= 4) {
      return (
       
        <Link className="col-3 text-decoration-none  " to={`/product1/${brands.id1}`} key={brands.id1}>
         
          <ItemCard1 
            img={breadItem1.img}
            name={breadItem1.name}
            price={breadItem1.price}
          

            nutritionalData1={breadItem1.nutritionalData1}  // Pass nutritional data or any relevant data
          />
        </Link>
       
      );
    }
    return null;
  });
    export default popularList1