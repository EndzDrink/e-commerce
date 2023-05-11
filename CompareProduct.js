import React from 'react';
import images from '../asset/images';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';
import Meta from '../components/Meta';

const CompareProduct = () => {
  return (
    <>
    <Meta title={'Compare Products'}/>
    <BreadCrumb title='Compare Products'/>
    <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative '>
                            <img src={images.cross} alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src={images.watch} alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price mb-3 mt-3'>R1000</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='text-secondary'>Havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='text-secondary'>Tablet Computers</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>SKU:</h5>
                                        <p className='text-secondary'>SKUD33</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p className='text-secondary'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Colour:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative '>
                            <img src={images.cross} alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src={images.watch} alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price mb-3 mt-3'>R1000</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='text-secondary'>Havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='text-secondary'>Tablet Computers</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>SKU:</h5>
                                        <p className='text-secondary'>SKUD33</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p className='text-secondary'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Colour:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </Container>
    </>
  )
}

export default CompareProduct