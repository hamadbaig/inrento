import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../Assets/logo.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-first">
        <img src={logo} alt="InRento" />
        <p>We are licensed and regulated by the Bank of Lithuania.</p>
        <div className="footer-social">
          <i className="fab fa-facebook"></i>

          <i className="fab fa-youtube"></i>

          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-sec">
        <div>
          <a href="#">Home</a>
          <a href="#">Loan Application</a>
          <a href="#">Projects</a>
          <a href="#">Secondary Market</a>
          <a href="#">Contact</a>
          <a href="#">Risk Disclaimer</a>
        </div>
        <div>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">FAQ</a>
          <a href="#">Statistics</a>
          <a href="#">Careers</a>
          <a href="#">Price List</a>
        </div>
      </div>
      <div className="footer-third">
        <a href="#">Complaints Handling Policy</a>
        <a href="#">Conflict of Interest Avoidance Policy</a>
        <a href="#">Projects Risk Scoring Policy</a>
        <a href="#">Outstanding Commitments Management Policy</a>
        <a href="#">Procedures for Preparation of KIID</a>
        <a href="#">Procedures for Assessing Offer Proposals</a>
      </div>
      <div className="footer-forth">
        <p>
          Please note that your investments are not covered by the deposit
          insurance scheme established in accordance with Directive 2014/49/EU
          of the European Parliament and of the Council of 16 April 2015 on
          deposit guarantee schemes.
        </p>
      </div>
      <div className="footer-last">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Imprint</a>
      </div>
      {/* <div className="footer-top"></div>
      <div className="footer-links">
        <div className="footer-logo">
          <img src={logo} alt="InRento" />
          <p>We are licensed and regulated by the Bank of Lithuania.</p>
          <div className="footer-social">
            <i className="fab fa-facebook"></i>

            <i className="fab fa-youtube"></i>

            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div>
          <h4>Main</h4>
          <a href="#">Home</a>
          <a href="#">Loan Application</a>
          <a href="#">Projects</a>
          <a href="#">Secondary Market</a>
          <a href="#">Contact</a>
          <a href="#">Risk Disclaimer</a>
        </div>
        <div>
          <h4>Information</h4>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">FAQ</a>
          <a href="#">Statistics</a>
          <a href="#">Careers</a>
          <a href="#">Price List</a>
        </div>
        <div>
          <h4>Policies</h4>
          <a href="#">Complaints Handling Policy</a>
          <a href="#">Conflict of Interest Avoidance Policy</a>
          <a href="#">Projects Risk Scoring Policy</a>
          <a href="#">Outstanding Commitments Management Policy</a>
          <a href="#">Procedures for Preparation of KIID</a>
          <a href="#">Procedures for Assessing Offer Proposals</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Please note that your investments are not covered by the deposit
          insurance scheme...
        </p>
        <p>© 2024 InRento. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Imprint</a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
