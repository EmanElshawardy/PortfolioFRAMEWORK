import React from 'react'
import "./Home.css";
import Logo from "../../images/avataaars.svg"
export default function Home() {
  return (
     <header className="home  ">
    <div className="d-flex flex-column justify-content-center align-items-center text-white ">
      <img src={Logo} alt="logo" className="mb-3" width={250} />
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
      <div className="star d-flex justify-content-center align-items-center mb-3 ">
        <div className="line bg-white me-3"></div>
      <i className="fa-solid fa-star"></i>
      <div className="line bg-white ms-3"></div>
      </div>
      <div>Graphic Artist - Web Designer - Illustrator</div>
    </div>

  </header>
  )
}
