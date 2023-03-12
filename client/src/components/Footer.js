import React from 'react'
import '../index.css';
import { Link } from "react-router-dom";
function Footer(){
  return (
    <div className="bee-page-container">
    <div className="bee-row bee-row-18">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 80 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-19">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w4">
            <div className="bee-block bee-block-1 bee-divider">
              <div
                className="center bee-separator"
                style={{ borderTop: "1px solid #0E0E0E", width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w4">
            <div className="bee-block bee-block-1 bee-image">
              <a href="/">
                <img
                  alt=""
                  className="bee-center bee-fixedwidth"
                  src="OLogo3d.png"
                  style={{ maxWidth: "169px" }}
                />
              </a>
            </div>
            <div className="bee-block bee-block-2 bee-divider">
              <div
                className="center bee-separator"
                style={{ borderTop: "1px solid #0E0E0E", width: "100%" }}
              ></div>
            </div>

            <div className="bee-block bee-block-3 bee-paragraph">
              <p>
                <span style={{ color: "#ffffff" }}>REACH US</span>
              </p>
            </div>
            <div className="bee-block bee-block-4 bee-social">
              <div className="content">
                <span className="icon" style={{ padding: "0 2.5px 0 2.5px" }}>
                  <a
                    href="https://www.facebook.com/jiitconverge/"
                    target="_self"
                  >
                    <img alt="Facebook" src="facebook2x.png" title="facebook" />
                  </a>
                </span>
                <span className="icon" style={{ padding: "0 2.5px 0 2.5px" }}>
                  <a href="https://twitter.com/jiit_converge" target="_self">
                    <img alt="Twitter" src="twitter2x.png" title="twitter" />
                  </a>
                </span>
                <span className="icon" style={{ padding: "0 2.5px 0 2.5px" }}>
                  <a
                    href="https://in.linkedin.com/school/converge-jiit-noida"
                    target="_self"
                  >
                    <img alt="Linkedin" src="linkedin2x.png" title="linkedin" />
                  </a>
                </span>
                <span className="icon" style={{ padding: "0 2.5px 0 2.5px" }}>
                  <a
                    href="https://www.instagram.com/jiitconverge"
                    target="_self"
                  >
                    <img
                      alt="Instagram"
                      src="instagram2x.png"
                      title="instagram"
                    />
                  </a>
                </span>
                <span className="icon" style={{ padding: "0 2.5px 0 2.5px" }}>
                  <a
                    href="https://www.youtube.com/channel/UCi--HXm4CBEpKhkt5oD4Q1A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="YouTube" src="youtube2x.png" title="YouTube" />
                  </a>
                </span>
                <span className="icon" style={{ padding: "0 2.5px 0 2.5px" }}>
                  <a
                    href="https://www.snapchat.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="Snapchat" src="snapchat2x.png" title="Snapchat" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w4">
            <div className="bee-block bee-block-1 bee-divider">
              <div
                className="center bee-separator"
                style={{ borderTop: "1px solid #0E0E0E", width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-20">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-heading">
              <h3
                style={{
                  color: "#909090",
                  fontSize: "22px",
                  fontFamily:
                    "Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif",
                  lineHeight: "120%",
                  textAlign: "center",
                  direction: "ltr",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                <span className="tinyMce-placeholder">
                  Made with ❤ by Team Prismatic.​
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="bee-block bee-block-1 bee-image">
          <a
            href="https://github.com/suyashXD/converge23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              className="bee-center bee-fixedwidth"
              src="github-11-32.ico"
              style={{ maxWidth: "32px" }}
            />
          </a>
        </div>
      </div>
      <div className="bee-row bee-row-21">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div
              className="bee-block bee-block-1 bee-icons"
              id="beepro-locked-footer"
            >
              <div className="bee-icon bee-icon-last">
                <div className="bee-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;