import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoIosHome } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import { HiMail } from 'react-icons/hi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Container from '../components/Container';
const Contact = () => {
  return (
    <>
    <Meta title={'Contact Us'}/>
    <BreadCrumb title='Contact Us'/>
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.140502471761!2d31.024758815407328!3d-29.860221581949705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9b66d8370e7%3A0x12f49dc91c599225!2s30%20Acutt%20St%2C%20Durban%20Central%2C%20Durban%2C%204001!5e0!3m2!1sen!2sza!4v1677074758985!5m2!1sen!2sza" 
            width="600" 
            height="450" 
            className='border-0 w-100' 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input className='form-control' type='text' placeholder='Name'/>
                    </div>
                    <div>
                      <input className='form-control' type='Email' placeholder='Email'/>
                    </div>
                    <div>
                      <input className='form-control' type='tel' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea className='w-100 form-control' id='' cols='4' rows='10' placeholder='Comment'>
                      </textarea>
                    </div>
                    <div>
                      <button type='button' className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0 text-secondary'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoIosHome className='fs-5 '/>
                        <address className='mb-0'>30 Acutt Street, Durban 4001</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <MdCall className='fs-5'/>
                        <a href='tel:+27732554298'>+27-732-554-298</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <HiMail className='fs-5'/>
                        <a href='mailto:SAMthembu@gmail.com'><i>Info</i>@ShoDevTec.co.za</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsFillInfoCircleFill className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 8:00 AM - 20:00 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Container>
    </>
  )
}

export default Contact