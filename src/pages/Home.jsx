import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router'

function Home() {
  return (
    <>
    <Header/>
    <div className='container d-flex justify-content-center mt-5'>
      <div className='row d-flex'>
          <div className='col-6  mt-5'>
              <h1><i>Hey Welocome!!</i></h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae soluta
                 repudiandae placeat molestiae ratione aliquam quidem ab voluptatum ipsa laborum nostrum, in quae neque </p>
                 <Link to='/abt' className='btn btn-warning'>More About Us</Link>
          </div>
          <div className='col-6'>
              <img src="https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-student-with-laptop-sitting-online-education-concept-remote-studying-concept-png-image_11588978.png" alt="" />
          </div>
      </div>
    </div>
     
    </>
  )
}

export default Home