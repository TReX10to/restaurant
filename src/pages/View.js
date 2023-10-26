import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Operating from '../components/Operating';
import Reviews from '../components/Reviews';


function View() {
const [allrestaurants,setAllRestaurants]=useState([])

const param=useParams()
//var id=param.id
var{id}=param/* key will be called and stored in same variable */


const getAllRest= async () =>{
const result=await axios.get('/restaurants.json')
setAllRestaurants(result.data.restaurants);
}

useEffect(() => {
 getAllRest()
}, [])
// console.log(id);
// console.log(allrestaurants);

//find single Rest
const singleRest=allrestaurants.find(i=>i.id==id)
console.log(singleRest);



  return (
    <div>

  { singleRest?
   <Row>
    
   <Col lg={6} sm={12} xs={12} md={6} className='p-5 ms-5 mt-5 mb-5'>
    <img style={{height:'700px',}} className='w-75' src={singleRest.photograph} alt="" />
   </Col>
   <Col className='text-start'>
   <h1 className=' mt-3 text-info '>{singleRest.name}</h1>
   <ListGroup className='me-5 pe-5 mt-5 w-75 fs-4'>
      <ListGroup.Item className='mt-4'>
        <b><span className='text-info me-5'>Address</span> {singleRest.address}</b>
        </ListGroup.Item>
      <ListGroup.Item className='mt-4'>
        <b><span className='text-info me-5'>Cuisine Type</span> {singleRest.cuisine_type}</b>
        </ListGroup.Item>
      <ListGroup.Item className='mt-4'>
      <b><span className='text-info me-5'>neighborhood</span> {singleRest.neighborhood}</b>
      </ListGroup.Item>
      <ListGroup.Item className='mt-4'>
     <Operating operatingData={singleRest.operating_hours}></Operating>
      </ListGroup.Item>
      <ListGroup.Item className='mt-4'>
      <Reviews reviews={singleRest.reviews}></Reviews>
      </ListGroup.Item>
     
    </ListGroup>
   </Col>
   </Row>:
   <Row><h1>No Data</h1></Row>}


    </div>
  )
}

export default View