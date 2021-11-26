import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import AuthProvider from './context/AuthProvider';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Homes/Home/Home';
import AboutUs from './Components/Homes/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AboutTour from './Components/Homes/AboutTour/AboutTour';
import MyOrders from './Components/Homes/MyOrders/MyOrders';
import ManageAll from './Components/Homes/ManageAll/ManageAll';
import AddService from './Components/Homes/AddService/AddService';
import Contact from './Components/Homes/Contacts/Contact';
import Footer from './Components/Homes/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
             <Contact></Contact>
            </Route>
            <PrivateRoute path="/aboutdr/:tourId">
              <AboutTour></AboutTour>
            </PrivateRoute>
            <Route path="/orders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageOrders">
              <ManageAll></ManageAll>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/login">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
