import React, { useState } from "react";
import "./Contact.css";
export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <div className="size">
        <div className="title text-center mt-5 pt-5">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            conatct section
          </h2>
          <div className="star d-flex justify-content-center align-items-center mb-3 ">
            <div className="line bgColor me-3"></div>
            <i className="fa-solid fa-star "></i>
            <div className="line bgColor ms-3"></div>
          </div>
        </div>
        <form className="w-50  mx-auto mt-5">
          <label className={userName ? "labelTitle" : "labelTitle2"}>
            userName :{" "}
          </label>
          <input
            id="userName"
            type="text"
            className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"
            placeholder="userName"
            name="userName"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />

          <label className={userAge ? "labelTitle" : "labelTitle2"}>
            userAge :{" "}
          </label>
          <input
            type="number"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="userAge"
            onChange={(e) => {
              setUserAge(e.target.value);
            }}
            value={userAge}
          />
          <label className={userEmail ? "labelTitle" : "labelTitle2"}>
            userEmail :{" "}
          </label>
          <input
            type="email"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="userEmail"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            value={userEmail}
          />
          <label className={userPassword ? "labelTitle" : "labelTitle2"}>
            userPassword :{" "}
          </label>
          <input
            type="password"
            className="form-control border-0 border-bottom py-3 position-relative"
            placeholder="userPassword"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            value={userPassword}
          />
          <button className="bg  p-2 mt-4 text-white rounded border border-0">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
