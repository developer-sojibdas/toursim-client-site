import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css';


const ManageAll = () => {
    const [myOrder, setMyOrder] = useState([]);

    

    useEffect(()=>{
        fetch('https://chilling-pumpkin-77489.herokuapp.com/booking')
        .then(res=> res.json())
        .then(data => setMyOrder(data))
    },[])


// handle delete
const handleDelete = id =>{
    const url = `https://chilling-pumpkin-77489.herokuapp.com/booking/${id}`
    fetch(url, {
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data =>{

        const confirm = window.confirm('Are you Sure, You want to delete');

        if(data.deletedCount && confirm ){
           
            // alert("Are You Sure??")
            const remaining = myOrder.filter(userOrder => userOrder._id !== id );
            setMyOrder(remaining)
        }
      ;

    })

}
    return (
        <div className="mt-5 pt-5">
            
            <div className="mt-5 pt-5 container animate__animated animate__bounceInLeft">
            <h2>This is Manage all Orders:{myOrder.length}</h2>
            <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="" />
            <div className="user-container">
               {
                   myOrder.map((userOrder)=> <div
                   key= {userOrder._id}>
                       <Col>
          <Card>
            <Card.Img variant="top" src={userOrder.image} width="300px" height="200px" />
            <Card.Body>
              <Card.Title>{userOrder.tourName}</Card.Title>
              <p>User Name: {userOrder.clintName} </p>
              <p>User email: {userOrder.email} </p>
              <p>Mobile: {userOrder.clintPhn.slice(0,11)} </p>
              <p>Package Price: {userOrder.tourPrice} $ </p>
              
              
                <Button as={Link} to="/" variant="btn btn-primary m-2">
                  Add More
                </Button>
                
              
            </Card.Body>
          </Card>
        </Col>
        
                   </div>)
               }
            </div>
        </div>
        </div>
    );
};

export default ManageAll;