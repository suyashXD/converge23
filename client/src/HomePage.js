import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import EventsPage from "./EventsPage";
//import TeamPage from "./TeamPage";
import Footer from "./components/Footer";

function HomePage() {
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
                        fontSize: "50px",
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
                        EVENT REGISTRATIONS TO BE LIVE SOON
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
                  ></span>
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
                    The wait is finally over so Lights Camera Action! We bring
                    to you CONVERGE 23 a celebration of talent, passion and a
                    fusion of cultures. After three long years we are back with
                    a bang and to turn this event into a blockbuster hit we need
                    you to join us in our celebration. Do you have flair for
                    debating or your moves can make people groove, an ace of
                    sports or you hit the perfect note. Its time for you show
                    what you've got! With a few easy steps you can register in
                    the events of your choice and get a chance to win exciting
                    prizes.
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

      <div className="bee-row bee-row-3">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w3">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w6">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 45 }}></div>
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
                  <span style={{ fontSize: "46px", lineHeight: "55px" }}>
                    <strong style={{}}>
                      <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                        PREVIOUSLY
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-divider">
              <div className="spacer" style={{ height: 100 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w3">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-4">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w1">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w2">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Band Thumbnail Placeholder"
                className="bee-center bee-autowidth"
                src="1.jpg"
                style={{ maxwidth: 190 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w2">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Band Thumbnail Placeholder"
                className="bee-center bee-fixedwidth"
                src="2.jpg"
                style={{ maxwidth: 190 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-4 bee-col-w2">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Band Thumbnail Placeholder"
                className="bee-center bee-autowidth"
                src="3.jpg"
                style={{ maxwidth: 190 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-5 bee-col-w4">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Headliner Thumbnail Placeholder"
                className="bee-fixedwidth"
                src="4.jpg"
                style={{ maxwidth: 401 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-6 bee-col-w1">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
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
                        REGISTER HERE
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
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
                  Get a step closer to proving your talent with just a click.
                  Register here and win prizes in addition to being part of this
                  exhilarating gala.{" "}
                </span>
              </p>
            </div>
            <div className="bee-block bee-block-4 bee-divider">
              <div className="spacer" style={{ height: "45px" }}></div>
            </div>

            <div className="bee-block bee-block-5 bee-button">
              <Link
                className="bee-button-content"
                to="/EventsPage"
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
                  <strong style={{ fontSize: "16px" }}>LEARN MORE</strong>
                </span>
              </Link>
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w5">
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
                    textAlign: "right",
                  }}
                >
                  <span style={{ fontSize: "42px", lineHeight: "50px" }}>
                    <strong style={{}}>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        OUR TEAM
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-text">
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
                    textAlign: "right",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    JYC brings to you CONVERGE 2023...not a one<br/> man show
                    but an effort of a family which has excelled to bring the
                    most wholesome experience in our reach. No matter how
                    diverse their qualities may be, students seem to find a
                    society where their skillset can be nurtured among the
                    people having similar interests.{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-4 bee-divider">
              <div className="spacer" style={{ height: 45 }}></div>
            </div>
            <div className="bee-block bee-block-5 bee-button">
              <Link
                className="bee-button-content"
                to="/TeamPage"
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
                  <strong style={{ fontSize: "16px" }}>LEARN MORE</strong>
                </span>
              </Link>
            </div>

            <div className="bee-block bee-block-6 bee-divider">
              <div className="spacer" style={{ height: 45 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-4 bee-col-w1">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-7 bee-mobile_hide">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 40 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-8">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 40 }}></div>
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
                  <strong>
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "50px",
                        lineHeight: "60px",
                      }}
                    >
                      TIMELINE OF THE EVENT
                    </span>
                  </strong>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-divider">
              <div className="spacer" style={{ height: "15px" }}></div>
            </div>
            <div className="bee-block bee-block-4 bee-text">
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
                    The four day journey is lined up with events from every
                    corner of your imaginations that will hook you into your own
                    depths of creativity. Tune in on March 23 to 26 to be part
                    this spectacular show. Till then here's a sneak peak to all
                    thats about to happen.{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-5 bee-divider bee-desktop_hide">
              <div className="spacer" style={{ height: 70 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-9">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w1">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w2">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Time Placeholder"
                className="bee-center bee-fixedwidth"
                src="23.png"
                style={{ maxwidth: 174 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w3">
            <div className="bee-block bee-block-1 bee-text">
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
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong style={{}}>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        DAY ZERO
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
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
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      lineHeight: "19px",
                    }}
                  >
                    Cricket, Football, Basketball, Volleyball, Lawn Tennis,
                    Table Tennis, Badminton, Chess.
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-divider">
              <div
                className="left bee-separator"
                style={{ borderTop: "20px solid #014DF9", width: "75%" }}
              ></div>
            </div>
          </div>

          <div className="bee-col bee-col-5 bee-col-w2">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Time Placeholder"
                className="bee-fixedwidth"
                src="25.png"
                style={{ maxwidth: 174 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-6 bee-col-w3">
            <div className="bee-block bee-block-1 bee-text">
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
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong style={{}}>
                      <span style={{ lineHeight: "14px" }}>
                        <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                          DAY ONE
                        </span>
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
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
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      lineHeight: "19px",
                    }}
                  >
                    JIIT Youth Marathon, Cricket, Football, Volleyball,
                    Basketball, Lawn Tennis, Table Tennis, Badminton, Chess,
                    Inaugural Ceremony, Acoustica, Best Foot Forward, Bollywood
                    Bash, Speak Tweak, Brain Battle, LFR, Tamasha, Code Rage,
                    The Beauty Bar, Artision.
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-divider">
              <div
                className="left bee-separator"
                style={{ borderTop: "20px solid #014DF9", width: "30%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-10">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider bee-desktop_hide">
              <div className="spacer" style={{ height: 70 }}></div>
            </div>
            <div className="bee-block bee-block-2 bee-divider bee-mobile_hide">
              <div className="spacer" style={{ height: 20 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-11">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w2">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w4">
            <div className="bee-block bee-block-1 bee-image">
              <img
                alt="Alternate text"
                className="bee-autowidth"
                src="26.png"
                style={{ maxwidth: 418 }}
              />
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w4">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 30 }}></div>
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
                <p style={{ fontSize: "14px", lineHeight: "16px" }}>
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        DAY TWO
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-text">
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
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#ffffff",
                      lineHeight: "19px",
                    }}
                  >
                    Cricket, Football, Basketball, Volleyball, Lawn Tennis,
                    Table Tennis, Badminton, Chess, Sabrang, Beatdown, Groove,
                    Mr. &amp; Ms. Converge, Award Ceremony, Vaad Vivad,
                    Questify, Code Rage, Mehfil, Open Source and Linux
                    Conference, Debug Your Soul.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bee-col bee-col-4 bee-col-w2">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-12">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 30 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-13">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w3">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w3">
            <div className="bee-block bee-block-1 bee-text">
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
                  <span style={{ fontSize: "24px", lineHeight: "28px" }}>
                    <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                      NEED
                      <br />
                      MORE?
                    </span>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-2 bee-text">
              <div
                className="bee-text-content"
                style={{
                  fontSize: "12px",
                  lineHeight: "120%",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p style={{ fontSize: "12px", lineHeight: "14px" }}> </p>
              </div>
            </div>
            <div className="bee-block bee-block-3 bee-text">
              <div
                className="bee-text-content"
                style={{
                  fontSize: "12px",
                  lineHeight: "120%",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p style={{ fontSize: "12px", lineHeight: "14px" }}> </p>
              </div>
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
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong style={{}}>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        COUNTERS
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w4">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: "100px" }}></div>
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
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong style={{}}>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        UNTIL DUSK
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p></p>
                <ul style={{ listStyleType: "square" }}>
                  <li style={{ fontSize: "16px", lineHeight: "19px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#ffffff",
                        lineHeight: "19px",
                      }}
                    >
                      Crossword
                    </span>
                  </li>

                  <li style={{ fontSize: "16px", lineHeight: "19px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#ffffff",
                        lineHeight: "19px",
                      }}
                    >
                      Gamerex
                    </span>
                  </li>
                  <li style={{ fontSize: "16px", lineHeight: "19px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#ffffff",
                        lineHeight: "19px",
                      }}
                    >
                      Photo Booth
                    </span>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>

            <div className="bee-block bee-block-4 bee-divider">
              <div className="spacer" style={{ height: 40 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-4 bee-col-w2">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-14">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 30 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-15">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w3">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w3">
            <div className="bee-block bee-block-1 bee-text">
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
                  <span style={{ fontSize: "24px", lineHeight: "28px" }}>
                    <span style={{ color: "#ffffff", lineHeight: "14px" }}>
                      NO STOPPING...
                    </span>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-2 bee-text">
              <div
                className="bee-text-content"
                style={{
                  fontsize: 12,
                  lineheight: "120%",
                  fontfamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p style={{ fontsize: 12, lineheight: 14 }}> </p>
              </div>
            </div>
            <div className="bee-block bee-block-3 bee-text">
              <div
                className="bee-text-content"
                style={{
                  fontsize: 12,
                  lineheight: "120%",
                  fontfamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p style={{ fontsize: 12, lineheight: 14 }}> </p>
              </div>
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
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong style={{}}>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        ONLINE
                      </span>
                      <br />
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        EVENTS
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w4">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 100 }}></div>
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
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        UNTIL DUSK
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="bee-block bee-block-3 bee-text">
              <div
                className="bee-text-content"
                style={{
                  lineHeight: "120%",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  color: "#393d47",
                }}
              >
                <p></p>
                <ul style={{ listStyleType: "square" }}>
                  <li style={{ fontSize: "16px", lineHeight: "19px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#ffffff",
                        lineHeight: "19px",
                      }}
                    >
                      Exposure
                    </span>
                  </li>

                  <li style={{ fontSize: "16px", lineHeight: "19px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#ffffff",
                        lineHeight: "19px",
                      }}
                    >
                      Reel Tales
                    </span>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
            <div className="bee-block bee-block-4 bee-divider">
              <div className="spacer" style={{ height: 40 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-4 bee-col-w2">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-16">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 50 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bee-row bee-row-17">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w3">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w6">
            <div className="bee-block bee-block-1 bee-text">
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
                  <span style={{ fontSize: "50px", lineHeight: "60px" }}>
                    <strong>
                      <span style={{ lineHeight: "14px", color: "#ffffff" }}>
                        THROWBACK
                      </span>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
            <div className="bee-block bee-block-2 bee-divider">
              <div className="spacer" style={{ height: 30 }}></div>
            </div>
            <div className="bee-block bee-block-3 bee-image">
              <video
                width="900"
                height="364"
                autoPlay
                muted
                loop
                style={{ maxWidth: 632 }}
              >
                <source src="vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="bee-col bee-col-3 bee-col-w3">
            <div className="bee-block bee-block-1 bee-divider">
              <div className="spacer" style={{ height: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
