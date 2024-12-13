import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import './about.css'
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <>
    {/* header */}
    <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-heart px-2 fa-xl" style={{color: "#6e4ad9",}}  />
            Simple
          </Navbar.Brand>
          <div>
            <Link to="/contact" className='btn btn-light' style={{textDecoration:'none'}}>Contact</Link>
          </div>
          <div>
            <Link className=' btn btn-success' style={{textDecoration:'none'}} to="/">Home</Link>
          </div>
        </Container>
      </Navbar>

      {/* end */}


      {/* body */}

      <div class="banner mb-3 d-flex flex-column justify-content-center">
        <div class=" p-5">
            <h1>About Us</h1>
            <p></p>
        </div>
      </div>

      <div className='container d-flex justify-content-between'>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/incredibly-beautiful-nature-art-photography-fantasy-design-creative-background-amazing-colorful-sunset-lake-pond-water-incredibly-119178438.jpg" />
      <Card.Body>
        <Card.Title>Photography</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim vel laudantium molestiae consequatur similique id ab assumenda vero, repellat, maxime fuga earum 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg" />
      <Card.Body>
        <Card.Title>Videography</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim vel laudantium molestiae consequatur similique id ab assumenda vero, repellat, maxime fuga earum 
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg" />
      <Card.Body>
        <Card.Title>Filimography</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim vel laudantium molestiae consequatur similique id ab assumenda vero, repellat, maxime fuga earum 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default About