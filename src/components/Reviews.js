import React from 'react'
import Accordion from 'react-bootstrap/Accordion';



function Reviews({reviews}) {
  return (
    <div>
 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b className='text-info'>View Reviews</b></Accordion.Header>
        <Accordion.Body>

      {
           reviews?reviews.map(i=>
            (
              <div className='border fs-6'>
                   <p><b className='text-info'>Name:</b> { i.name}</p>
                    <p><b className='text-info'>Date:</b> {i.date}</p>
                    <p><b className='text-info'>Rating:</b>{i.rating}</p>
                    <p><b className='text-info'>Comments:</b>{i.comments}</p>

                
              </div>

            )):<h1>No reviews</h1>
        
      }

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  )
}

export default Reviews