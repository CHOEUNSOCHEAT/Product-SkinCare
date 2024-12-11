import React from 'react';
import Footer from './Footer';

const Logo4 = () => {
  return (
    <>
      <div className="container w-100 mt-5">
      <div>
          <img className='w-100' src="https://static.thcdn.com/images/large/webp/widgets/135-en/25/About_Us_Celebrate_30_Years_of_ESPA_Heritage%2C_Aromatherapy_and_Wellbeing_Pioneers%2C_since_1992_%281200_%C3%97_400px%29_%281%29-084525.png" alt="" />
        </div>
        {/* Section Title */}
        <div className="text-center mt-5 text-success">
          <h4>Wellbeing</h4>
        </div>

       
       

        {/* Row for images */}
        <div className="row mt-5">
          {/* Image 1 */}
          

          {/* Image 2 */}
        

          {/* Image 3 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/v2/app/uploads/sites/469/2022/06/0621_THG0041038_EA_LIFESTYLE_STUDIO_SHOT29_402-1_1657618582.jpg?width=300"
                alt="Wellbeing Image 3"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/v2/app/uploads/sites/469/2022/01/5056379529098-2_1643112754_1200x672_acf_cropped.jpg?width=300"
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
                src="https://static.thcdn.com/images/v2/app/uploads/sites/469/2021/10/Natures-Resonance-by-ESPA-Hero-1800x672_1634029953_1200x672_acf_cropped.jpg?width=300"
                alt="Wellbeing Image 6"
                className="img-fluid"
              />
            </div>
          </div>


          <div className=' w-100 container text-secondary fs-5 mt-5'>
            <p>Guided by 30 years' experience ESPA’s luxury skincare products go beyond the everyday skincare regimen to nourish and nurture your skin. The formulation of natural ingredients works together to create a sensorial wellness experience, imitating the luxury skincare treatments of a spa from the comfort of your home.</p>
          </div>
        </div>
      </div>

      <div>
        < Footer />
      </div>
    </>
  );
};

export default Logo4;
