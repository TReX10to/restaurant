import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
       <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand >
           <Link to={'/'}> <img
              alt=""
              src="https://i.postimg.cc/WbGt5FGr/res.jpg"
              width="50"
              height="40"
              className="d-inline-block align-top"
            /></Link>
            <b  className='text-white ms-4 mt-4 fs-3'><span className='text-info'>Top</span>Restaurants</b>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header