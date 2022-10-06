import React from "react";
import "./Closure.css";
import "./WhatWeDo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Closure() {
  return (
    <div className="Closure-House">
      <div>
        <h1 className="WWD-Text-12">
          Slide <span>Show</span>
        </h1>
        <Carousel>
          <div>
            <img
              className="CI"
              src="https://images.unsplash.com/photo-1598956500798-7b64cf4267f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            />
            <p></p>
          </div>
          <div>
            <img
              className="CI"
              src="https://images.unsplash.com/photo-1543066756-209ae0714cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            />
            <p></p>
          </div>
          <div>
            <img
              className="CI"
              src="https://images.unsplash.com/photo-1579723798913-390e4be1d6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            />
            <p></p>
          </div>
          <div>
            <img
              className="CI"
              src="https://images.unsplash.com/photo-1558010089-dba291b9d5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            />
            <p></p>
          </div>
        </Carousel>
      </div>
      <div className="WWD-Left">
        <h1 className="WWD-Text-12">
          Our <span>Clients</span>
        </h1>
        <p className="WWD-Text-2">
          Zedar Luxury is a business company that deals with car hire services.
          We are well known for providing luxurious and incredible cars to our
          clients. We give a variety of car model like saloon cars, suv and
          Tracks for road travels inclusive of off-road travels. We give
          consultancy services to our clients helping them to choose suitable
          cars for their travel. We also ensure the safety of cars are at superb
          levels by maintaining our cars under well labeled services
        </p>
      </div>
    </div>
  );
}

export default Closure;
