import React, { useEffect } from "react";
import "./Introduction.css";
import bg from "../assets/pamfour.png";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span
          className="introText"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          I'm <span className="introName">Pamela Ochungo, PhD</span>
          <br /> Remote Sensing Researcher{" "}
        </span>
        <p className="introPara" data-aos="zoom-in-up">
          Postdoctoral Scientist in Remote Sensing| Spatial Data Science| <br />{" "}
          Landscape Ecology| Spatial Modelling
        </p>
        <Link>
          <button className="btn">Read More</button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" data-aos="fade-left" />
    </section>
  );
};

export default Introduction;
