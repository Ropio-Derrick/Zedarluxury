import React, { useState } from "react";
import "./Form.css";
import "./ContText.css";

function Form() {
  const [changer, setChanger] = useState(false);
  const [flag, setFlag] = useState();
  const pageChanger = () => {
    setChanger(flag);
    setFlag(!changer);
  };
  return (
    <div className="Former-Main">
      {!flag ? (
        <div
          className="Former"
          style={{
            transform: " rotateX(180deg)  rotateY(180deg) rotateZ(180deg)  ",
            transition: "all 0.25s ease-in",
          }}
        >
          <div className="Displayer">
            <h1 className="CT-Text">
              Find <span>Us</span>
            </h1>
            <p className="CT-Text1">
              Zedar Luxury is a business company that deals with car hire
              services. We are well known for providing luxurious and incredible
              cars to our clients. We give a variety of car model like saloon
              cars, suv and Tracks for road travels inclusive of off-road
              travels. We give consultancy services to our clients helping them
              to choose suitable cars for their travel. We also ensure the
              safety of cars are at superb levels by maintaining our cars under
              well labeled services
            </p>
          </div>
        </div>
      ) : (
        <div
          className="Former"
          style={{
            transform: "rotateY(180deg) rotateZ(-180deg)  rotateX(-180deg) ",

            transition: "all 0.25s ease-out",
          }}
        >
          <form>
            <h1 className="Email-Header">Email Us</h1>

            <div className="Form-Placer">
              <div className="Name-Sitter">
                <input className="Name-Form" type="text" placeholder="Name" />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Email-Form"
                  type="email"
                  aria-required
                  placeholder="Email"
                />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Subject-Form"
                  type="subject"
                  aria-required
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="button-placer">
              <button className="smt-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
      <div className="button-placer1">
        {!flag ? (
          <button className="smt-btn1" onClick={pageChanger}>
            Chat
          </button>
        ) : (
          <button className="smt-btn2" onClick={pageChanger}>
            Info
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
