import React,{useState} from 'react';
import {Button, Modal} from 'react-bootstrap';


const Mensaje= (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {props.mensaje && 
        <>
            <Button variant="info" onClick={handleShow}>
                Ver Mensaje
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{props.nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.mensaje}</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
      }
    </>
  );
}


export default Mensaje;