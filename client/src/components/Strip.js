import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Strip() {
  const [isStripVisible, setIsStripVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 * window.innerHeight / 100) {
        setIsStripVisible(false);
      } else {
        setIsStripVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`running-strip-container ${isStripVisible ? "visible" : "hidden"}`}>
      <div className="running-strip">
        <p><strong><Link to="/EventsPage">Registrations are live now!</Link></strong></p>
      </div>
    </div>
  );
}

export default Strip;
