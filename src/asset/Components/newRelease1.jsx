const newRelease1 = newList.map((bread1) => (
 
    <Link
          className="col-3 text-decoration-none"
          to={`/product1/${bread1.id1}`}
         
        >
          <ItemCard1
            img={breadItem1.img}
            name={breadItem1.name}
            price={breadItem1.price}
            table={table}
         
          />
        </Link>
       
    ));
    export default newRelease1 