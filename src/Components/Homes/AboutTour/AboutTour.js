import axios from 'axios';
import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AboutTour = () => {
  const {tourId} = useParams();
  const [service, setService] = useState({});
  const [clintName, setClintName] = useState({});
  const [clintPhn, setClintPhn] = useState({});
  const { user } = useAuth();


  useEffect(()=>{
    fetch(`https://chilling-pumpkin-77489.herokuapp.com/services/${tourId}`)
    .then(res=> res.json())
    .then(data => setService(data))
  },[]);

  const {email} = user;

  const {tourName, tourPrice, image } = service;
  
  const bookingServices = {
    tourName, tourPrice, image, clintName, clintPhn, email
  }

  const handleFrom = e =>{
 
    e.preventDefault()
     alert('Booking Successfully')
    


    axios
      .post("https://chilling-pumpkin-77489.herokuapp.com/booking", bookingServices)

      .then((res) => {
        
      });


  }

  const handleName = e =>{
    setClintName(e.target.value);
  }

  const handleMobile = e =>{
    setClintPhn(e.target.value);
  }

    return (
      <div className="mt-5 pt-3 shadow-lg w-75 mx-auto py-5">
        <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="logo-image" />
        <h1>Booking Now</h1>
      
    <form onSubmit={handleFrom}>
      <Card style={{ width: '18rem' }} className="mx-auto mt-5">
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{tourName}</Card.Title>
    <Card.Text> Packege Price: 
       {tourPrice} $
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{email}</ListGroupItem>
    <input onBlur={handleName}  className="mb-2" type="text" name="" id="" placeholder="Enter Your Name" required /> 
   
   <input onBlur={handleMobile} type="number" name="" id="" placeholder="Mobile Number" required/>


    
  </ListGroup>

      {/* <Button as={Link} to="/home" type="input">Submit</Button> */}
    
    <button type="submit">Booking Confirm </button>

</Card>
    </form>
        

        <Link to='/orders'><button className="mt-5">Check Your Order</button></Link> <br />
        <Link to='/home'><button className="mt-1 my-5">Back</button></Link> <br />

        <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="logo-image" />
        </div>





      
    );
  };

export default AboutTour;