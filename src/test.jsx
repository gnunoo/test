import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function My_modal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            상세정보
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <div><img src={`${props.src}`} alt="영화사진"  width='500' height="400"/></div>
          <hr style={{border:"1px solid gray",borderBottom:'10px',borderTop:'10px'}}/>
          <p>평점:{props.vote_average}</p>
          
          <Modal.Body>{props.overview}</Modal.Body>
          <Modal.Footer>
            
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
}

export default My_modal;