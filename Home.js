import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import images from '../asset/images';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
  <>
  <Container class1='home-wrapper-1 py-5'> 
    <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src={images.mainBanner1} className='img-fluid rounded-3' alt='main banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From R13000 <br/>or R650/mo.</p>
                  <Link className='button'>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src={images.catbanner01} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>Massive SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From R26000 <br/> or R950/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={images.catbanner02} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Apple watch</h5>
                  <p>From R8000 <br/>or R550/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={images.catbanner03} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE</h4>
                  <h5>IPads and Tablets</h5>
                  <p>From R6000 <br/>or R250/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={images.catbanner04} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                  <h4>ACCESSORIES</h4>
                  <h5>Headphones</h5>
                  <p>From R26000 <br/>or R950/mo.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
  </Container>
  <Container class1='home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='service d-flex align-items-center justify-content-between'>
               {
                services?.map((i,j) => {
                  return(
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.images} alt='service'/>
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
               }
              </div>
            </div>
          </div>
        
  </Container>
  <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.camera} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.tv} alt='tv'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.speaker} alt='speaker'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Air Pods</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.acc} alt='acc'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.camera} alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.tv} alt='tv'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.speaker} alt='speaker'/>
                </div>
                <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Air Pods</h6>
                    <p>10 items</p>
                  </div>
                  <img src={images.acc} alt='acc'/>
                </div>
              </div>
            </div>
          </div>
  </Container>
  <Container class1='featured-wrapper py-5 home-wrapper-2'>
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/> 
            <ProductCard />
            <ProductCard />
          </div>
  </Container>
  <Container class1='famous-wrapper py-5 home-wrapper-2'>
    <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={images.subbanner01} className='img-fluid bg-dark' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From R8000 or R450/mo. for 24mo.</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={images.subbanner02} className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-secondary'>STUDIO DISPLAY</h5>
                  <h6 className='text-dark'>600 unit of brightness</h6>
                  <p className='text-secondary'>27-inch 4k Renita display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={images.subbanner03} className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-secondary'>SMARTPHONES</h5>
                  <h6 className='text-dark'>Smartphone 14 pro</h6>
                  <p className='text-secondary'>Now in Green from R23000 or R1200/mo. for 24mo. </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={images.subbanner04} className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-secondary'>HOME SPEAKERS</h5>
                  <h6 className='text-dark'>Romm-filling sound</h6>
                  <p className='text-secondary'>From R6500 or R450/mo. for 24mo.</p>
                </div>
              </div>
            </div>
          </div>
  </Container>
  <Container class1='special-wrapper py-5 home-wrapper-2'>
    <div className='row'>
          <div className='col-12'>
              <h3 className='section-heading py-2'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
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
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
  </Container>
  <Container class1='marquee-wrapper home-wrapper-2 py-5'>
    <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src={images.brand01} alt='brand'/>
                    </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand02} alt='brand'/>
                    </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand03} alt='brand'/>
                    </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand04} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand05} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand06} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand07} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src={images.brand08} alt='brand'/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
  </Container>
  <Container class1='blog-wrapper py-5 home-wrapper-2'>
    <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading py-2'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
          </div>
  </Container>
  </>
  );
};

export default Home;