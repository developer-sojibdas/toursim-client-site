import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    const { _id, tourName, tourPrice, description, image } = service;
    return (
      <div className="container  ">
        <Col>
          <Card>
            <Card.Img variant="top" src={image} width="350px" height="280px" />
            <Card.Body>
              <Card.Title>{tourName}</Card.Title>
              <b>Tour Price: {tourPrice} $</b>
              <p>Description: {description} </p>
              <Link to={`/aboutdr/${_id}`}>
                <button>
                  BOOKING {tourName}
                </button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Service;