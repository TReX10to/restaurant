import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'

function Home() {
  const [restaurants, setRestaurants] = useState([])



  //function api call
  const getAllRestaurant = async () => {
    const result = await axios.get('/restaurants.json')
    setRestaurants(result.data.restaurants);
  }


  useEffect(() => {
    getAllRestaurant()
  }, [])

  console.log(restaurants);
  return (
<div>
<Row>
  
  <Col xs={12} sm={6} className='p-5 ' >
  <Container>
    <h1 className='m-3 text-info'> Hundreds of flavors under one roof.</h1>
   <p className='mt-3 ms-3 test-start w-75'>Top Restaurants offers a relaxed way to discover the best food deals and restaurants to eat near you. </p>
   <p className='mt-3 ms-3 test-start w-75'>However, if you already have a place in mind, type in the address, the name or the zip code and let it work for you!</p>
    </Container>
  </Col>
 
  <Col lg={6} >
  <Container>
   <img className='mb-3 mt-5'src="https://i.postimg.cc/gkVCH2vt/food-1.jpg" alt="" style={{width:'540px',height:'350px'}}/>
 
</Container>
  </Col>
</Row>

<hr />
  <Container>
    <Row>
      {
        restaurants.length > 0 ? restaurants.map(i => (

          <Col xs={12} sm={6} lg={4} md={6}>
            <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '80%', height: '510px' }} className='mt-4 mb-2'>
              <Card.Img style={{ height: '400px' }}
                variant="top" src={i.photograph} />
              <Card.Body>
                <Card.Title className='text-center text-info'>{i.name}</Card.Title>
                <Card.Text>
                  Address{i.address}
                </Card.Text>

              </Card.Body>
            </Card>
          </Link>
          </Col>

        )) : (<h1>No data present</h1>)
      }
    </Row>
    </Container>
    </div>
  )

}

export default Home 