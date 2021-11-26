import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'animate.css';
import './Contact.css'

const Contact = () => {

    const handleSubmit = e =>{
        e.preventDefault()
        alert('Thanks For Send Your Information')
    }
    return (
        <div className="mt-5 pt-2 ">
           <div className="background  py-5 text-white"></div>
           <div className="bg-text">
                <h1>Let's Connect</h1>
                <h3 className="pb-5 animate__animated animate__bounceInLeft">We'd love to help you start exceeding you CX goals</h3>
                </div>

                <img className="animate__animated animate__bounceInLeft" src="https://i.ibb.co/PhwBsjN/logo.png" alt="" />

            <div className="contact-section container  shadow-lg p-5">

            <div className="">
            <Form className="container from-txt animate__animated animate__bounceInLeft">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <button onClick={handleSubmit} type="submit">
    Submit
  </button>
</Form>
            </div>

            </div>

            

        </div>
    );
};

export default Contact;