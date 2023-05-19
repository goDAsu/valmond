import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO VALMONDVILLE"
              title="Best Basic Education Experience"
            />
            <p>
              Far far away, behind the world mountains, far from the countries
              Volmond and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET ADMISSION NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW PROCESS <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
