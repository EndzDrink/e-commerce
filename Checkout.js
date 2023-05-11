import React from 'react';
import images from '../asset/images';
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Checkout = () => {
  return (
    <>
    <Container class1='checkout-wrapper py-5'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>ShoDev.Tec</h3>
                        <nav 
                        style={{'--bs-breadcrumb-divider': '>'}}
                        area-label='breadcrumb'
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link className='text-dark total-price' to="/cart">Cart</Link>
                                </li>&nbsp; &gt;
                                <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                &nbsp; &gt;
                                <li className="breadcrumb-item active total-price">
                                    Shipping
                                </li>&nbsp; &gt;
                                <li className="breadcrumb-item active" aria-current="page">Payment</li>
                            </ol>
                        </nav>
                        <h4 className='title total'>Contact Information</h4>
                        <p className='user-details total'>Endz Meet (SirnzoMthembu@gmail.com) </p>
                        <h4 className='mb-3'>
                            Shipping Address
                        </h4>
                        <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                            <div className='w-100'>
                                <select 
                                name='' 
                                className='form-control form-select'  
                                id=''>
                                    <option value='valeu' selected disabled>Select Country</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='First Name' className='form-control'>

                                </input>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='Last Name' className='form-control'>

                                </input>
                            </div>
                            <div className='w-100'>
                                <input type='text' placeholder='Address' className='form-control'>

                                </input>
                            </div>
                            <div className='w-100'>
                                <input type='text' placeholder='Apartment, flat, etc' className='form-control'>

                                </input>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='City' className='form-control'>

                                </input>
                            </div>
                            <div className='flex-grow-1'>
                            <select 
                                name='' 
                                className='form-control form-select'  
                                id=''>
                                    <option value='' selected disabled>Select Province/State</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                            <input type='text' placeholder='Zip-Code' className='form-control'>

                            </input>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to='/cart' className='text-dark'>
                                    &lt;&nbsp; Return to Cart
                                    </Link>
                                    <Link to='/cart' className='button'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex mb-2 gap-10 align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span style={{'top':'-10px', right: '2px'}} className='badge bg-secondary text-white rounded-circle position-absolute'>1</span>
                                <img src={images.headphone} className='img-fluid' alt='product'/>
                            </div>
                            <div>
                                <h5 className='total-price'>Something</h5>
                                <p className='total-price'>Something Something and maybbe more thing and thing</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5 className='total'>ZAR 100</h5>
                        </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>
                                Sub-Total
                            </p>
                            <p className='total-price'>
                                ZAR 1000
                            </p>
                        </div>
                    <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>
                                Shipping
                            </p>
                            <p className='mb-0 total-price'>
                                ZAR 1000
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                        <h4 className='total'>
                            Total
                        </h4>
                        <h5 className='total-price'>
                            ZAR 1000
                        </h5>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Checkout