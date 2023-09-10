import React from "react";
import './About.css'
export default function About() {
  return (
    <>
      <div className="size about text-white d-flex flex-column justify-content-center align-items-center">
        <div className="m-5 p-5">
        <div className="title text-white text-center pt-4 ">
          <h2 className="text-uppercase  mb-3 fs-1 fw-bolder">
            About Component
          </h2>
          <div className="star d-flex justify-content-center align-items-center mb-3 ">
            <div className="line text-white me-3"></div>
            <i className="fa-solid fa-star "></i>
            <div className="line text-white ms-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p >
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
