import React, { useEffect, useState } from "react";
import "../index.css";

function Timer() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const countdownDate = new Date("March 25, 2023 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container">
      <div className="inner">
        
        <br/>
        
        
        <div className="timer">
        <div className="time"><strong>{days}</strong>
        <div> 
        <p style={{color: "white"}}><strong>DAYS</strong></p>
          </div>
        </div>
        <span style={{color: "white"}}><strong>:</strong></span>
          <div className="time"><strong>{hours}</strong>
          <div> 
        <p style={{color: "white"}}><strong>HOURS</strong></p>
          </div>
          </div>
          
          <span style={{color: "white"}}><strong>:</strong></span>
          <div className="time"><strong>{minutes}</strong>
          <div> 
        <p style={{color: "white"}}><strong>MINUTES</strong></p>
          </div>
          </div>
          <span style={{color: "white"}}><strong>:</strong></span>
          <div className="time"><strong>{seconds}</strong>
          <div> 
        <p style={{color: "white"}}><strong>SECONDS</strong></p>
          </div>
          </div>
        </div>
        <br/>
        
      </div>
    </div>
  );
}

export default Timer;
