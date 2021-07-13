import React from "react";
import "./Hire.css";

function WhatWeDo() {
  return (
    <div>
      <div className="WWD-Board">
        <div className="WWD-Right">View our Motors</div>
        <div className="WWD-Left">
          <div>
            <form className="Car-Form">
              <h1 className="WWD-Text-12">
                Book
                <span> Ride</span>
              </h1>
              <div className="Form-Close">
                <h1 className="CT1">Car Model</h1>
                <select className="Car-Selector" placeholder="Vehicle Category">
                  <option className="CST"> Select a car</option>
                  <option>LC V8</option>
                  <option>Prado</option>
                  <option>Lexus 570</option>
                  <option>Toyota Harrier</option>
                  <option>Toyota Noah</option>
                  <option>Mazda Demio</option>
                  <option>Toyota TX</option>
                </select>
              </div>

              <div className="Form-Close">
                <h1 className="CT1">Rental Date</h1>
                <input
                  className="Car-Selector"
                  type="date"
                  placeholder="Date"
                  required
                />
              </div>
              <div className="Form-Close">
                <h1 className="CT1">Drop Date</h1>
                <input
                  className="Car-Selector"
                  placeholder="Date"
                  type="date"
                  required
                />
              </div>

              <div className="Form-Close">
                <h1 className="CT1">Email Address</h1>
                <input
                  className="Car-Selector"
                  placeholder="example@example.com"
                  required
                  type="email"
                />
              </div>

              <div className="Form-Close">
                <h1 className="CT1">Phone Number</h1>
                <input
                  className="Car-Selector"
                  placeholder="+010***********"
                  required
                  type="text"
                />
              </div>

              <button className="Car-Btn">Book Car</button>
            </form>
          </div>
        </div>
      </div>

      <div className="WWD-Board">
        <div className="WWD-Right1">
          <form className="Car-Form">
            <h1 className="WWD-Text-12">
              Lets Help You
              <br />
              Choose <span>A Ride</span>
            </h1>
            <select className="Car-Selector" placeholder="Vehicle Category">
              <option className="CST"> Vehicle Category</option>
              <option value="Maserati">Luxury SUV</option>
              <option value="Maserati">Sedan</option>
              <option value="Maserati">Limousine</option>
              <option value="Maserati">Pickup truck</option>
            </select>

            <select className="Car-Selector" placeholder="Sitting Capacity">
              <option className="CST">Sitting Capacity</option>
              <option value="Maserati">2 Passengers</option>
              <option value="Maserati">5 Passengers</option>
              <option value="Maserati">7 Passengers</option>
              <option value="Maserati">8 Passengers</option>
            </select>

            <select className="Car-Selector" placeholder="Transmition">
              <option className="CST"> Transmision</option>
              <option value="Maserati">Manual Transmision</option>
              <option value="Maserati">Automatic Transmision</option>
            </select>

            <select className="Car-Selector" placeholder="Fuel Type">
              <option className="CST"> Fuel Type</option>
              <option value="Maserati">Petrol</option>
              <option value="Maserati">Diesel</option>
            </select>

            <button className="Car-Btn">View Car</button>
          </form>
        </div>
        <div className="WWD-Left1">
          <img
            className="WWD-Image2"
            src={require("../Asssets/Images/pngaaa.com-7975948.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
