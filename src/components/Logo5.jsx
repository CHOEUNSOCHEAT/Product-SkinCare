import React from 'react'
import Footer from './Footer';
const Logo5 = () => {
  return ( <>
    <div className="container w-100 mt-5">
      <div>
          <img className='w-100' src="https://static.thcdn.com/images/large/webp/widgets/135-en/56/Elevate_your_Bathing_experience_with_100%25_cotton_ribbed_and_waffle_%281200_%C3%97_400px%29-125256.png" alt="" />
        </div>
        {/* Section Title */}
        <div className="text-center mt-5 text-success">
          <h4>Luxury Spas</h4>
        </div>

       
       

        {/* Row for images */}
        <div className="row mt-5">
          {/* Image 1 */}
          

          {/* Image 2 */}
        

          {/* Image 3 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/05/2-034205.png"
                alt="Wellbeing Image 3"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/02/3-034202.png"
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
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/07/original-Shot-90-380x312-125607.jpg"
                alt="Wellbeing Image 6"
                className="img-fluid"
              />
            </div>
          </div>


          <div className=' w-100 container text-secondary fs-5 mt-5'>
           <p>LED Light treatment is a non-invasive, results-driven treatment for all skin types and tones. It works at a deep, cellular level and is clinically proven to improve the appearance of wrinkles, even skin tone and texture, increase firmness and significantly increase the amount of collagen and elastin fibres. LED leaves skin feeling hydrated and plumped, promoting a glowing complexion.

Delivered at the correct intensity, precision wavelengths trigger your skin cells to renew and replenish more efficiently and effectively.

To enjoy facial or body-focused spa treatments of this nature, look for a spa near you and enquire about their LED Light offering.</p>
          </div>
        </div>
      </div>

      <div>
        < Footer />
      </div>
    </>
  
   
  )
}

export default Logo5
