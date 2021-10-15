//import useState.
import React, {useState} from "react";
//import toast from react-bootstrap components.
import Toast from "react-bootstrap/Toast";
//import button from react-bootstrap components.
import Button from 'react-bootstrap/Button';
//import row from react-bootstrap components.
import Row from 'react-bootstrap/Row';
//import col from react-bootstrap components.
import Col from 'react-bootstrap/Col';

function Rules() {
  const [show, setShow] = useState(false);
  //return to display react-bootstrap toast component with onclose and button onclick event.
  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Rules of the Memory Game:</strong>
          </Toast.Header>
          <Toast.Body> Click 2 cards at a time. If the 2 cards chosen match it will remain seen till you match all cards. If the 2 cards chosen does not match then they will be flipped back over. Match all cards and you win. </Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Help</Button>
      </Col>
    </Row>
  );
}

//export code to be avalable outside this module.
export default Rules;