import React from "react";
import khamsat from "../assets/imgs//khamsat.svg";

export default function Footer() {
  return (
    <div id="footer">
      <div className="copyright text-white bg-dark m-auto p-1 rounded-3">
        <span className="badge">
          Made with <i className="fa-solid fa-heart"></i> by Abdulrahman Zaki
        </span>
        <div className="icons-version-wrapper">
          <div className="icons-box">
            <a
              href="https://www.linkedin.com/in/dev-abdulrahman-zaki"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/aazs-edu" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://khamsat.com/user/jae_s" target="_blank">
              <img src={khamsat} />
            </a>
          </div>
          {/* <span className="badge">-Version 0.1</span> */}
        </div>
      </div>
    </div>
  );
}
