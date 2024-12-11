import React from 'react'
import Footer from './Footer';
const logo2 = () => {
  return (<>
  <div className="container w-100 mt-5">
      <div>
          <img className='w-100' src="https://static.thcdn.com/images/large/webp/widgets/135-en/46/original-0813_438533_ES_MH_Advent_Banner_Amend_20_1200_%C3%97_400-132246.jpg" alt="" />
        </div>
        {/* Section Title */}
        <div className="text-center mt-5 text-success">
          <h4>ESPA Skin</h4>
        </div>

       
       

        {/* Row for images */}
        <div className="row mt-5">
          {/* Image 1 */}
          

          {/* Image 2 */}
        

          {/* Image 3 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/59/original-Wellness_Wonders-124959.jpg"
                alt="Wellbeing Image 3"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/35/original-Winter_Aromatherapy_Collection-125435.jpg"
                alt="Wellbeing Image 4"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Image 5 */}
         

          {/* Image 6 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/15/original-Glow_Giving_Collection_%281%29-122415.jpg"
                alt="Wellbeing Image 6"
                className="img-fluid"
              />
            </div>
          </div>


          <div className=' w-100 container text-secondary fs-5 mt-5'>
           <p>Timeless Regenerating Collection: 50% off
           Give the gift of skin evolurion with a complete routine of 5 full size, age-defying products from our most loved Tri-Active™ Regenerating Range. Worth £114, each luxurious formula works to reduce fine lines, wrinkles and uneven skin tone, complete with a Cotton Cleansing Cloth.</p>
          </div>
        </div>
      </div>

      <div>
        < Footer />
      </div>

  </>
    
  )
}

export default logo2
