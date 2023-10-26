import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';



function Operating({ operatingData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="warning" className='w-100 p-' onClick={handleShow}>
                <b className='fs-5'> Operating Hours</b>
            </Button>

            <Modal className='fs-5' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title ><b><span className='text-warning'>Operating</span> Hours</b> </Modal.Title>
                </Modal.Header>
                <Modal.Body> <ListGroup as="ul">
                    <ListGroup.Item as="li" >Monday : <span className='text-warning'>{operatingData.Monday}</span></ListGroup.Item>
                    <ListGroup.Item as="li">Tuesday :<span className='text-warning'> {operatingData.Tuesday}</span></ListGroup.Item>
                    <ListGroup.Item as="li" >Wednesday :<span className='text-warning'>{operatingData.Wednesday}</span></ListGroup.Item>
                    <ListGroup.Item as="li">Thursday :<span className='text-warning'>{operatingData.Thursday}</span></ListGroup.Item>
                    <ListGroup.Item as="li">Friday :<span className='text-warning'> {operatingData.Friday}</span></ListGroup.Item>
                    <ListGroup.Item as="li">Saturday :<span className='text-warning'>{operatingData.Saturday}</span></ListGroup.Item>
                    <ListGroup.Item as="li">Sunday :<span className='text-warning'> {operatingData.Sunday}</span></ListGroup.Item>
                </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Operating