import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function EventsCard16() {
  return (
    <div className="bee-row bee-row-6">
      <div className="bee-row-content">
        <div className="bee-col bee-col-1 bee-col-w1">
          <div className="bee-block bee-block-1 bee-divider">
            <div className="spacer" style={{ height: 0 }}></div>
          </div>
        </div>
        <div className="bee-col bee-col-2 bee-col-w5">
          <div className="bee-block bee-block-1 bee-divider">
            <div className="spacer" style={{ height: 60 }}></div>
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
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "42px", lineHeight: "50px" }}>
                  <strong style={{}}>
                    <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                    GAMEREX
                    </span>
                  </strong>
                </span>
                
              </p>
            </div>
          </div>

          <div className="bee-block bee-block-3 bee-image">
            <img
              alt="Band Thumbnail Placeholder"
              className="bee-center bee-fixedwidth"
              src="https://i.ibb.co/NZmTzrK/Gamerex.png"
              style={{ maxWidth: "220px" }}
            />
          </div>

          <div
            className="bee-block bee-block-3 bee-text"
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
                textAlign: "left",
              }}
            >
              
              <span
                  style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  Date: 25th - 26th March 2023<br/>
Time: 11:00AM - 02:00PM<br/>
Venue: TBD<br/>
Gamerex, a FIFA 23 tournament on PS4, is being organized by Prismatic: The Design Hub, exclusively for students. Register now to compete with other gamers and win exciting prizes.
                </span>
              
            </p>
          </div>
          <div className="bee-block bee-block-4 bee-divider">
            <div className="spacer" style={{ height: "45px" }}></div>
          </div>

          <div className="bee-block bee-block-5 bee-button">
            <a
              className="bee-button-content"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdl0rFXWOJU5_3qxvnMV3btECEp41jd4fu3teJyASif83wbKw/viewform?usp=sf_link"
              style={{
                fontSize: "16px",
                backgroundColor: "transparent",
                borderBottom: "1px solid #FFFFFF",
                borderLeft: "1px solid #FFFFFF",
                borderRadius: "0px",
                borderRight: "1px solid #FFFFFF",
                borderTop: "1px solid #FFFFFF",
                color: "#ffffff",
                direction: "ltr",
                fontFamily:
                  "'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif",
                maxWidth: "100%",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "5px",
                width: "auto",
                display: "inline-block",
              }}
              target="_self"
            >
              <span
                dir="ltr"
                style={{
                  wordBreak: "break-word",
                  fontSize: "16px",
                  lineHeight: "200%",
                }}
              >
                <strong style={{ fontSize: "16px" }}>REGISTER</strong>
              </span>
            </a>
          </div>
        </div>
        <div className="bee-col bee-col-3 bee-col-w5">
          </div>
        </div>
    </div>
  );
}

export default EventsCard16;
