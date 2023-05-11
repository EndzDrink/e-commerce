import React, { useState } from 'react';
import images from '../asset/images';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { HiOutlineHeart } from 'react-icons/hi'
import { GoGitCompare } from 'react-icons/go';
import Container from '../components/Container';

const SingleProduct = () => {
  const props = {width: 400, height: 600, zoomWidth: 600, img: images.appleWatch02};
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = ( text ) => {
    console.log('text', text);
    var textFuild = document.createElement('textarea');
    textFuild.innerText = text;
    document.body.appendChild(textFuild);
    textFuild.select();
    document.execCommand('copy');
    textFuild.remove();
  };
  return (
    <>
    <Meta title={'Product Name'}/>
    <BreadCrumb title='Product Name'/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div>
                          <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className='other-product-images d-flex flex-wrap gap-15'>
                          <div>
                            <img className='img-fluid' src={images.appleWatch02} alt='other-images'/>
                          </div>
                          <div>
                            <img className='img-fluid' src={images.appleWatch} alt='other-images'/>
                          </div>
                          <div>
                            <img className='img-fluid' src={images.appleWatch} alt='other-images'/>
                          </div>
                          <div>
                            <img className='img-fluid' src={images.appleWatch02} alt='other-images'/>
                          </div>
                    </div>
                </div>
              <div className='col-6'>
                <div className='main-product-details'>
                  <div className='border-bottom'>
                  <h3 className='title'>Apple Watch Ultra with Ocean Band</h3>
                  </div>
                  <div className='border-bottom py-3'>
                    <p className='price'>R19 000</p>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                      count={5}
                      size={24}
                      value={4.25}
                      edit={false}
                      activeColor='#ffd700'
                      />
                      <p className='mb-0'>( 5 Reviews )</p>
                    </div>
                    <a className='review-btn' href='#review'>Write a Review</a>
                  </div>
                  <div className=' py-3'>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Types :</h3>
                      <p className='product-data'>Ultra</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Brand :</h3>
                      <p className='product-data'>Apple Watch</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Category :</h3>
                      <p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Tags :</h3>
                      <p className='product-data'>Watch</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>SKU :</h3>
                      <p className='product-data'>5HH0077jk745</p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-2'>
                      <h3 className='product-heading'>Availability :</h3>
                      <p className='product-data'>In Stock</p>
                    </div>
                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                      <h3 className='product-heading'>Size :</h3>
                      <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        S
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        M
                      </span><span className='badge border border-1 bg-white text-dark border-secondary'>
                        L
                      </span><span className='badge border border-1 bg-white text-dark border-secondary'>
                        XL
                      </span>
                      </div>
                    </div>
                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                      <h3 className='product-heading'>Color :</h3>
                      <Color/>
                    </div>
                    <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                      <h3 className='product-heading'>Quantity :</h3>
                      <div className=''>
                        <input className='form-control' type='number' min={1}  max={10} style={{width: '70px'}} name='' id=''/>
                      </div>
                      <div className='d-flex align-items-center gap-30'>
                      <button className='button border-0 ms-5' type='add'>Add to Cart</button>
                      <button className='button border-0'>Buy Now</button>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-15'>
                      <div>
                        <a href='#'>
                          <GoGitCompare className='fs-5 me-2'/>Add to Compare</a>
                      </div>
                      <div>
                        <a href='#'>
                          <HiOutlineHeart className='fs-5 me-2'/>Add to Wishlist</a>
                      </div>
                    </div>
                    <div className='d-flex gap-10 flex-column my-3'>
                      <h3 className='product-heading'>Shipping & Returns :</h3>
                      <p className='product-data'>Free shipping and returns on all orders! <br/> We ship all RSA domestic orders within <b>5-10 working days</b></p>
                    </div>
                    <div className='d-flex gap-10 align-items-center my-3'>
                      <h3 className='product-heading'>Product Link :</h3>
                      <a href='javascript:void(0);' onClick={() => {
                        copyToClipboard("https://www.istore.co.za/media/catalog/product/u/l/ultra_2_1.png?format=jpeg");
                      }}>Copy Product Link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </Container>
    <Container class1='description-wrapper py-5 home-wrapper-2'>
          <div className='col-12'>
            <h4>Description</h4>
              <div className='bg-white p-3'>
                <p >
                  Dolor ea labore quis elit ex dolore aliqua est aliqua commodo fugiat. 
                  Commodo velit nulla duis irure reprehenderit Lorem ea est fugiat commodo minim. 
                  Id dolore enim occaecat est culpa quis officia aliqua consequat dolore elit ullamco minim. 
                  Magna qui ut aliquip cupidatat dolor voluptate aliqua.
                </p>
              </div>
          </div>
    </Container>
    <Container id='review' class1='reviews-wrapper pb-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
              <h3 className='mb-2'>
                  Reviews</h3>
              <div className='reviews-inner-wrapper'>
              <div className='reviews-head d-flex justify-content-between align-items-end'>
                <div >
                <h4 className='mb-2'>
                    Customer Reviews</h4>
                   <div className='d-flex align-items-center gap-10'>
                   <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor='#ffd700'
                    />
                    <p className='mb-0 t-review'>Based on 2 Reviews</p>
                   </div>
                  
                </div>
               {
                  orderedProduct && (
                    <div>
                    <a className='text-dark text-decoration-underline' href='/'>Write A Review</a>
                  </div>
                  )}
              </div>
              <div  className='reviews-form py-4'>
                <h4 className='mb-2'>
                    Write a Reviews
                </h4>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={true}
                    activeColor='#ffd700'
                    />
                  </div>
                    <div>
                      <textarea className='w-100 form-control' id='' cols='4' rows='10' placeholder='Comment'>
                      </textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button type='button' className='button border-0'>Submit Review</button>
                    </div>
                  </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>Yewande</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor='#ffd700'
                      />
                  </div>
                    <p className='mt-3'>Cupidatat non commodo eu amet enim nisi elit minim amet. Qui fugiat exercitation tempor laboris elit consectetur do elit reprehenderit laboris exercitation labore. Lorem magna id dolor pariatur mollit.</p>
                </div>
              </div>
              </div>
            </div>
        </div>
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading py-2'>Our Popular Products</h3>
            </div>
            <div>
              <div className='row'>
                <ProductCard/>
                <ProductCard/>
              </div>
            </div>
          </div>
    </Container>
    </>
  )
}

export default SingleProduct