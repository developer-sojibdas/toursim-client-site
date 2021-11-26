import React from "react";
import './Home.css'
import { Card, CardGroup, Carousel, Row } from "react-bootstrap";
import img1 from "../../../images/banner/img1.jpg";
import img2 from "../../../images/banner/img2.jpg";
import img3 from "../../../images/banner/img2.jpg";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Carousel className="mt-5 pt-2">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
            Bangladesh is a land of amazing natural beauty and there are no bounds
            </h3>
            <p>
            Bangladesh is a land of amazing natural beauty and there are no bounds of her prettiness which has glorified by the blessing of nature. therefore, in a small country like Bangladesh, there are lots of Tourist Places that can be said as a tourist destination, from them, Top 30 Tourist Places of Bangladesh are given below-
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
          <h3 style={{ color: "black" }}>
            Bangladesh is a land of amazing natural beauty and there are no bounds
            </h3>
            <p>
            Bangladesh is a land of amazing natural beauty and there are no bounds of her prettiness which has glorified by the blessing of nature. therefore, in a small country like Bangladesh, there are lots of Tourist Places that can be said as a tourist destination, from them, Top 30 Tourist Places of Bangladesh are given below-
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
          <h3 style={{ color: "black" }}>
            Bangladesh is a land of amazing natural beauty and there are no bounds
            </h3>
            <p>
            Bangladesh is a land of amazing natural beauty and there are no bounds of her prettiness which has glorified by the blessing of nature. therefore, in a small country like Bangladesh, there are lots of Tourist Places that can be said as a tourist destination, from them, Top 30 Tourist Places of Bangladesh are given below-
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Services></Services>
    </div>

    
  );
};

export default Home;
