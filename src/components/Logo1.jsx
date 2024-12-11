import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Import the faCheck icon
import Footer from './Footer';

const Logo1 = () => {
    return (
        <>
            <div className="container w-100 mt-5">
                <div className="text-success text-center">
                    <h4>Please Select Your Delivery Location</h4>
                </div>
                <div className="mt-5 text-center">
                    <button type="button" className="btn btn-warning me-3">Cambodia</button>
                    <button type="button" className="btn btn-primary">International</button>
                </div>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between p-2">
                                        <h6>Delivery Option</h6>
                                        <h6>Cost</h6>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between p-3 text-success">
                                        <h6>Tracked Delivery</h6>
                                        <h6>2.50 $</h6>
                                    </div>

                                    <div className="p-3">
                                        <div>
                                           
                                            <p>  <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Delivered in 2-3 days from dispatch</p>
                                        </div>
                                        <div>
                                           
                                            <p>  <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Free on all orders over 1.50 $</p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between p-3">
                                        <h6 className='text-success'>Click and Collect now available in the UK!</h6>
                                    </div>

                                    <div className="p-3">
                                        <div className='d-flex '>
                                           
                                            <p>  <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Free for orders over £30.00</p>
                                        </div>
                                        <div>
                                            
                                            <p>  <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;£1.50 for orders under £30.00</p>
                                        </div>
                                        <div>
                                           
                                            <p> <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Choose from over 8500 collection points</p>
                                        </div>
                                        <div>
                                          
                                            <p> <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Save your favourite locations for future orders</p>
                                        </div>
                                        <div>
                                            
                                            <p> <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Receive a notification when your order is available for collection</p>
                                        </div>
                                        <div>
                                           
                                            <p>  <FontAwesomeIcon icon={faCheck} aria-label="Checkmark" />&nbsp;&nbsp;Delivered within 2-3 days and available for collection for a further 10 days</p>
                                        </div>

                                     
                                     
                                    </div>

                                    <div className=' p-3'>
                                            <h6 className='text-success'>Next Day Click & Collect</h6>
                                            <p>Choose from over 8500 collection points</p>
                                            <p>Save your favourite locations for future orders</p>
                                            <p>Receive a notification when your order is available for collection</p>
                                            <p>Delivered within 1 day and available for collection for a further 10 days</p>
                                            <p>Order before 10pm for next day delivery, 7 days per week. Restrictions apply.</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
               <Footer /> 
            </div>
        </>
    );
}

export default Logo1;
