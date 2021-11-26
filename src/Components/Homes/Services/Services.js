import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import 'animate.css';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://chilling-pumpkin-77489.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className="container animate__animated animate__bounceIn">
             <h1 className="text-center my-5 pt-2 animate__animated animate__bounceInLeft">Top Tourist  <span style={{color:"hotpink"}}>Places of Bangladesh</span> </h1>
            <Row xs={1} md={2} lg={3} className="g-4 ">
            {services.map(service=><Service
            key = {service._id}
            service = {service}
            ></Service>)}
            </Row>
            

               
        </div>
    );
};

export default Services;