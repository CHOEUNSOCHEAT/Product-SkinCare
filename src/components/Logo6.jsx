import React from 'react'
import Footer from './Footer';

const Logo6 = () => {
  return ( <>

<div className="container w-100 mt-5">
      <div>
          <img className='w-100' src="https://static.thcdn.com/images/large/webp/widgets/135-en/00/original-shot28-1920x600-010900.jpg" alt="" />
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
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/18/original--1080x1350-120418.jpg"
                alt="Wellbeing Image 3"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/38/original-0428_50287_THG0042093_ES_MH_Skin_Saviours_AM_Shot10_1080x1350-114738.jpg"
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
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/06/original--1080x1350_%281%29-115406.jpg"
                alt="Wellbeing Image 6"
                className="img-fluid"
              />
            </div>
          </div>


          <div className=' w-100 container text-secondary fs-4 mt-5'>
           <p>Healthcare & NHS Workers get 30% off at ESPA
           Healthcare and NHS workers can now benefit from 30% off. Verify your employment to get your ESPA healthcare service & NHS discount code.</p>
          </div>
        </div>
      </div>

      <div>
        < Footer />
      </div>
  </>
   
  )
}

export default Logo6
