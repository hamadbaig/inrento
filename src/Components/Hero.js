import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo.jpg";
import logos from "../Assets/logo-s.png";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <section className="home-main">
      <div className="overlay">
        <nav className="navbaar">
          <div className="logo">
            <img src={logo} alt="logo" className="img"></img>
          </div>
          <div className="navlink">
            <div className="link">Project</div>
            <div className="link">Secondary Market</div>
            <div className="link">About</div>
            <div className="link">News</div>
            <div className="link">Contact</div>
            <div className="link">Login</div>
            <div className="link">Signup</div>
            <select className="select-option">
              <option value="option1">English</option>
              <option value="option2">Leituviu</option>
            </select>
          </div>
          <div className="cross" onClick={handleToggle}>
            {isContentVisible ? (
              <FaTimes className="home-icon" />
            ) : (
              <FaBars className="home-icon" />
            )}
          </div>
        </nav>
        {isContentVisible && (
          <div className="content-div">
            <div className=" options ">
              <a href="/">HOME</a>
            </div>
            <div className=" options  ">
              <a href="/Aboutus">ABOUT</a>
            </div>
            <div className=" options ">
              <a href="/Work">WORK</a>
            </div>
            <div className=" options ">
              <a href="/Contact">CONTACT</a>
            </div>
          </div>
        )}
        <div className="hero-content">
          <div className="content-1">
            <img src={logos} alt="small logo" className="s-logo"></img>
            <p>TOOL AGAINST INFLATION</p>
          </div>
          <div className="content-2">
            <h1>
              Rental Properties <br />
              <strong>Investment Platform</strong>
            </h1>
          </div>
          <div>
            <p className="para">
              Start earning monthly interest and capital gains with investments
              starting at just €500! All investments are secured with property
              mortgages.
            </p>
          </div>
          <div className="btn-div">
            <button className="btn">Register To Invest</button>
            <button className="btn2">Get Funding</button>
          </div>
        </div>
        <div className="hero-foot">
          <div>
            <div>
              <h3>Europe Fintech Awards 2022</h3>
            </div>
            <div className="foot-para">#1 Investment Tech Of The Year</div>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="foot-logo">
            <img src={logo} alt="foot logo" className="img"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
