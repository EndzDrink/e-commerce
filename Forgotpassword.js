import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Meta from '../components/Meta';

const Forgotpassword = () => {
  return (
    <>
    <Meta title={'Forgot Password'}/>
    <BreadCrumb title='Forgot Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Your Password</h3>
                        <p className='text-center mt-2 mb-3'>An email will be sent in order to reset your password</p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput type='Email' name='email' placeholder='Your e-mail address: '/>
                            <div>
                                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button className='button border-0'type='submit'>Submit</button>
                                    <Link to='/log-in'>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Forgotpassword