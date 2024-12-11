import React from 'react';
import Footer from './Footer';
const Logo3 = () => {
  return (
    <>
      {/* Full width container for the top image */}
      <div className="container w-100 mt-5">
        <div>
          <img
            className="w-100" // Ensures image takes up full width of the container
            src="https://static.thcdn.com/images/large/webp/widgets/135-en/41/original-Shot56-780x360RA-051241.png"
            alt="Product banner"
          />
        </div>
      </div>

      {/* Main content with text and images */}
      <div className="container mt-5">
        <div className="text-center text-success">
          <h5>Product Principles</h5>
        </div>

        <div className="text-secondary mt-5">
          <p>
            ESPA has always been focused on the importance of naturality. The power of natural ingredients lives at the heart of all our products and practices. We want to let our clients see more of ESPA, from the way we source our ingredients and manufacture our products, to more details on our world-renowned spas that all epitomise ‘heaven on earth’. Discover more about our philosophy.
          </p>
        </div>

        {/* Images grid section */}
        <div className="row mt-5">
          {/* Image 1 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/53/Untitled_design_%2864%29-010353.png"
                alt="ESPA Product 1"
                className="img-fluid" // Ensures images are responsive
              />
            </div>
          </div>
          {/* Image 2 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/57/Untitled_design_%2837%29-124957.png"
                alt="ESPA Product 2"
                className="img-fluid"
              />
            </div>
          </div>
          {/* Image 3 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card border-0">
              <img
                src="https://static.thcdn.com/images/small/webp/widgets/135-en/25/380x312-125525.jpg"
                alt="ESPA Product 3"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Logo3;

