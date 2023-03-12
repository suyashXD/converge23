import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsCard from "./components/EventsCard";
import Footer from "./components/Footer";

function EventsPage() {
  return (
    <div className="bee-page-container">
      <div className="bee-row bee-row-1">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 150 }}></div>
            </div>
            <div className="bee-block bee-block-2 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "34px",
                      lineHeight: "40px",
                    }}
                  >
                    THIS MARCH IS HOTTER THAN USUAL
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-image">
              <a href="/">
              <img
                alt="Alternate text"
                className="bee-center bee-autowidth"
                src="white3dtext.png"
                style={{ maxwidth: 428 }}
              />
              </a>
            </div>
            <div className="bee-block bee-block-4 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <strong style={{}}>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      IS BACK!
                    </span>
                  </strong>
                </p>
              </div>
              <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 150 }}></div>
            </div>

              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <strong style={{}}>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "60px",
                        lineHeight: "70px",
                      }}
                    >
                      EXPLORE
                    </span>
                  </strong>
                </p>
              </div>

              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <strong style={{}}>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "60px",
                        lineHeight: "70px",
                      }}
                    >
                      EMBRACE
                    </span>
                  </strong>
                </p>
              </div>


              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <strong style={{}}>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "60px",
                        lineHeight: "70px",
                      }}
                    >
                      EXPERIENCE
                    </span>
                  </strong>
                </p>
              </div>

            </div>
            <div className="bee-block bee-block-5 bee-divider">
              <div className="spacer" style={{ height: 240 }}></div>
            </div>
            <div className="bee-block bee-block-6 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: "34px", lineHeight: "40px" }}>
                    <strong>
                      <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                        REGISTER HERE FOR THE EVENTS
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-7 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#ffffff",
                    }}
                  >
                    FROM THE COMFORT OF YOUR ROOMS
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-8 bee-divider">
              <div className="spacer" style={{ height: 20 }}></div>
            </div>
            <div className="bee-block bee-block-9 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#0e0e0e",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    adipiscing elit, sed diam nonummy nibh
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    euismod tincidunt ut laoreet dolore magna
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    aliquam erat volutpat.
                  </span>
                </p>
              </div>
            </div>
            <div className="bee-block bee-block-10 bee-divider">
              <div className="spacer" style={{ height: 30 }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bee-row bee-row-5">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 40 }}></div>
            </div>
          </div>
        </div>
      </div>
      <EventsCard/>
    







      <Footer/>
    </div>
  );
}

export default EventsPage;
