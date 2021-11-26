import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth()
  return (
    <div>
      <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand  as = { Link } to="/home">
            <span style={{color:"hotpink"}}>Holiday</span> Wanders
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" >
              <Nav className="me-auto">
              <Nav.Link as={ Link } to ="/home">Home</Nav.Link>
              <Nav.Link as={ Link } to ="/contact">Contact US</Nav.Link>
              {user.email ? <Nav.Link as={ Link } to ="/orders">My Orders</Nav.Link> : []}
              {user.email ? <Nav.Link as={ Link } to ="/manageOrders">Manage All Orders</Nav.Link> : []}
              {user.email ? <Nav.Link as={ Link } to ="/addService">Add A New Service</Nav.Link> : []}
              <Nav.Link as={ Link } to ="/about">About</Nav.Link>
              </Nav>
              
              { user.email ? 
              <Link to =""><button onClick={logOut} className="btn btn btn-danger">LogOut</button></Link>

              :
                <Link to ="/login"><button className="btn btn btn-danger">Login</button></Link>
              }
              <Navbar.Text>
                { user.email && <span style={{color:"white"}}>{user.displayName}</span>}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
};

export default Header;