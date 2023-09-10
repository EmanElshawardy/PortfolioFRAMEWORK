import React from 'react'
import "./Footer.css";

export default function Footer() {
  const card = {
    backgroundColor: '#2c3e50',
   border:'none'
  };
  return (
    <>
        <footer className="footer ">
          <div className="bgColor p-5">
          <div className="card-group m-4 ">
              <div className="card " style={card}>
                <div className="card-body text-white text-center">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              
              <div className="card  text-white"style={card}>
                <div className="card-body text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="social">
                  <i className="icon fa-brands fa-facebook mx-1"></i>
                  <i className="icon fa-brands fa-twitter mx-1"></i>
                  <i className="icon fa-brands fa-linkedin-in mx-1"></i>
                  <i className="icon fa-solid fa-globe mx-1"></i>
                  </div>
                </div>
              </div>
              <div className="card" style={card}>
                <div className="card-body text-white  text-center">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    {" "}
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route{" "}
                  </p>
                </div>
              </div>
            </div>
            </div>
          <div className="copyRight text-center p-4">
            <p className=" text-white m-0 ">Copyright © Your Website 2021</p>
          </div>
        </footer>
      </>
  )
}
