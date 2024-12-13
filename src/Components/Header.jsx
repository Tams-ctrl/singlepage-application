import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function Header() {
  return (
    <>
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
           <Link to="/contact" className='btn btn-light' style={{textDecoration:'none'}}>Contact</Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header