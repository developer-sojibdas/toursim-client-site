import React, { useState } from "react";
import {useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { signInUsingGoogle } = useAuth();
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri);
    })
    .catch(error=>{
      setError(error.message);
  })
   
  };
  return (
    <div className="my-5 py-5 shadow-lg w-75 mx-auto ">
      <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="" />
      <h1 className="my-5">Sign In With Google</h1>
      <button  onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default SignIn;
