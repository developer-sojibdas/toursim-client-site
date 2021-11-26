import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import 'animate.css';
import "./AddServices.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://chilling-pumpkin-77489.herokuapp.com/services", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert('Added Successfull');

          reset();
        }
      });
  };

  return (
    <div className="mt-5 pt-5 add-services " >
      <h2>Add Your Services</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-75 mt-5 py-5 mx-auto animate__animated animate__fadeIn">
      <img src="https://i.ibb.co/PhwBsjN/logo.png" alt="logo-image" />
        <input {...register("tourName")} placeholder="Tour Name" required/>
        <textarea {...register("description")} placeholder="Description" required />
        <input
          type="number"
          {...register("tourPrice")}
          placeholder="Packege Price" required
        />
        <input {...register("image")} placeholder="Add Image" />
        <button type="submit">ADD TO DATABASE </button>
        <br />
       
       <Link to ="/home"> <button>Back</button></Link>
        
      </form>
    </div>
  );
};

export default AddService;
