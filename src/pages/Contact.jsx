import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';


function Contact() {
  return (
    <>

    {/* header  */}
        <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-heart px-2 fa-xl" style={{color: "#6e4ad9",}}  />
            Simple
          </Navbar.Brand>
          <div className="d-flex ">
            <Link className=' btn btn-info' style={{textDecoration:'none'}} to="/abt">About</Link>
            
          </div>
          <div>
            <Link className=' btn btn-success' style={{textDecoration:'none'}} to="/">Home</Link>
          </div>
        </Container>
      </Navbar>

      {/* end */}

      {/* body */}

      <div className='d-flex justify-content-center m-5'>
      <i className="fa-brands fa-2xl fa-bounce fa-linkedin mx-3" />
      <i className="fa-brands fa-2xl fa-bounce fa-github mx-3" />
      <i className="fa-brands fa-2xl fa-bounce fa-facebook mx-3" />
      <i className="fa-brands fa-2xl fa-bounce fa-x-twitter mx-3" />
      </div>
    </>
  )
}

export default Contact