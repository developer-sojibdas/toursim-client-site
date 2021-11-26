import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from "../../images/error/404.png";
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className="not-found"  src={img1} alt=""/>
      <div>
        <Link to="/">
          <Button>go back</Button>
        </Link>
      </div>
        </div>
    );
};

export default NotFound;