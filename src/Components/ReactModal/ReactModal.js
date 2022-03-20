import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


const ReactModal = (probs) => {
    const {id,description,image,title,price,rating} = probs.product
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Description: {description.slice(30)}
            <div className="row mt-3 mx-2">
                <div className="col-md-6 border">
                    <img className="w-50 my-2" src={image} alt="" />
                </div>
                <div className="col-md-6 border">
                    <h5>Price: {price}</h5>
                    <p>Rating: {rating.rate}</p>
                    <small>id: {id}</small>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;