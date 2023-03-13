import React from "react";
import "../index.css";
//import { Link } from "react-router-dom";

function TeamCard() {
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
                      SIDDHANT JINDAL
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
              src="/1.jpg"
              style={{ maxWidth: "220px" }}
            />
          </div>
          <div className="bee-block bee-block-4 bee-divider">
            <div className="spacer" style={{ height: "45px" }}></div>
          </div>
          <div className="bee-block bee-block-5 bee-button">
            <a
              className="bee-button-content"
              href="https://www.example.com"
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
                direction: "ltr",
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
                <strong style={{ fontSize: "16px" }}>LINKEDIN</strong>
              </span>
            </a>
          </div>
        </div>
        <div class="bee-col bee-col-3 bee-col-w5">
          <div class="bee-block bee-block-1 bee-divider">
            <div class="spacer" style={{ height: "60px" }}></div>
          </div>
          <div class="bee-block bee-block-2 bee-text">
            <div
              class="bee-text-content"
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
                  textAlign: "right",
                }}
              >
                <span style={{ fontSize: "42px", lineHeight: "50px" }}>
                  <strong style={{}}>
                    <span style={{ lineHeight: "14px" }}>
                      <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                        RAHUL PAMNANI
                      </span>
                    </span>
                  </strong>
                </span>
              </p>
            </div>
          </div>
          <div class="bee-block bee-block-3 bee-image">
            
              <img
                alt="Band Thumbnail Placeholder"
                class="bee-center bee-fixedwidth"
                src="/2.jpg"
                style={{ maxWidth: "220px" }}
              />
            
          </div>
          <div class="bee-block bee-block-4 bee-divider">
            <div class="spacer" style={{ height: "45px" }}></div>
          </div>
          <div class="bee-block bee-block-5 bee-button">
            <a
              class="bee-button-content"
              href="https://www.example.com"
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
                direction: "ltr",
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
                <strong style={{ fontSize: "16px" }}>LINKEDIN</strong>
              </span>
            </a>
          </div>
          <div class="bee-block bee-block-6 bee-divider">
            <div class="spacer" style={{ height: "45px" }}></div>
          </div>
        </div>

        <div class="bee-col bee-col-4 bee-col-w1">
          <div class="bee-block bee-block-1 bee-divider">
            <div class="spacer" style={{ height: 0 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
