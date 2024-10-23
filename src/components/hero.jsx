import React from "react";
import NavBar from "./navbar";

function HeroSection() {
  return (
    <>
      <header>
        <div className="hero-section">
          <div
            style={{
              paddingTop: "30px",
              paddingLeft: "154px",
              paddingRight: "100px",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "space-between",
            }}
          >
            <NavBar />
            <div
              style={{
                width: "fit-content",
                color: "white",
                border: "2px solid white",
                borderRadius: "50px",
                padding: "0px 15px",
                marginTop: "150px",
                marginBottom: "1px",
              }}
            >
              <p>500+ Satisfied Customers</p>
            </div>
            <p
              style={{
                color: "white",
                fontSize: "66px",
                fontWeight: "lighter",
                marginTop: "20px",
                marginBottom: "0px",
              }}
            >
              Rev Up Your Ride With
            </p>
            <p
              style={{
                color: "white",
                fontSize: "66px",
                fontWeight: "bolder",
                marginTop: "0px",
                marginBottom: "18px",
              }}
            >
              Vic's Auto Service
            </p>
            <p
              style={{
                color: "white",
                fontSize: "18px",
                marginTop: "1px",
                marginBottom: "18px",
              }}
            >
              Keep you on the road with expert repairs, honest service, and a
              smile
            </p>
            <div
              style={{
                width: "fit-content",
                marginTop: "20px",
              }}
            >
              <button
                style={{
                  height: "45px",
                  marginRight: "12px",
                  paddingRight: "40px",
                  paddingLeft: "40px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  border: "none",
                  borderRadius: "50px",
                }}
              >
                Our Services
              </button>
              <button
                style={{
                  height: "45px",
                  color: "white",
                  marginLeft: "12px",
                  paddingRight: "40px",
                  paddingLeft: "40px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  backgroundColor: "#2C9AFFCC",
                  border: "none",
                  borderRadius: "50px",
                }}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
