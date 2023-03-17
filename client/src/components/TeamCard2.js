import React from "react";
import "../index.css";
//import { Link } from "react-router-dom";

function TeamCard2() {
  return (
    <div className="bee-row bee-row-6">
      <div className="bee-row-content">
        <div className="bee-col bee-col-1 bee-col-w1">
          <div className="bee-block bee-block-1 bee-divider">
            <div className="spacer" style={{ height: "0px" }}></div>
          </div>
        </div>
        <div className="bee-col bee-col-2 bee-col-w5">
          <div className="bee-block bee-block-1 bee-divider">
            <div className="spacer" style={{ height: "60px" }}></div>
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
                      AMAN NAGPAL
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
              src="https://www.linkpicture.com/q/Aman.png"
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
                <strong>COMMITTEE MEMBER</strong>
              </span>
              <br />
            </p>
          </div>
          <div className="bee-block bee-block-4 bee-divider">
            <div className="spacer" style={{ height: "45px" }}></div>
          </div>
          <div className="bee-block bee-block-5 bee-button">
            <a
              className="bee-button-content"
              href="https://www.linkedin.com/in/aman-nagpal-5216451b0/" target="_blank" rel="noreferrer"
              style={{
                fontSize: "16px",
                backgroundColor: "transparent",
                borderBottom: "1px solid #FFFFFF",
                borderLeft: "1px solid #FFFFFF",
                borderRadius: "0px",
                borderRight: "1px solid #FFFFFF",
                borderTop: "1px solid #FFFFFF",
                color: "#ffffff",
                fontFamily:
                  "'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif",
                maxWidth: "100%",
                paddingBottom: "5px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "5px",
                width: "auto",
                direction: "center",
                display: "inline-block",
              }}
              
            >
              <span
                dir="ltr"
                style={{
                  wordBreak: "break-word",
                  fontSize: "16px",
                  lineHeight: "200%",
                }}
              >
                <strong style={{ fontSize: "16px" }}>LINKEDIN</strong>
              </span>
            </a>
          </div>
        </div>
        </div>
    </div>
  );
}

export default TeamCard2;
