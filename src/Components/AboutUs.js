import Abouthd from "../Assets/aboudhd.png";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="diff">
        <h1 className="title2">
          How we’re
          <br />
          <strong>different?</strong>
        </h1>
        <img src={Abouthd} alt="about " className="about-img"></img>
      </div>
      <div className="about-det">
        <div className="section">
          <div className="icon">📄</div>
          <div className="text-container">
            <h2 className="heading">Licensed & Regulated</h2>
            <p className="description">
              InRento is the EU’s first and largest licensed buy-to-let
              crowdfunding platform. Services of InRento are licensed and
              regulated by the Bank of Lithuania.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="icon">📈</div>
          <div className="text-container">
            <h2 className="heading">Interest From Rent & Capital Gains</h2>
            <p className="description">
              Interest on the InRento platform is generated from rent and
              capital gains. Interest from rent is distributed monthly, while
              potential capital gains are distributed at the end of the project.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="icon">↔️</div>
          <div className="text-container">
            <h2 className="heading">Secondary Market</h2>
            <p className="description">
              Worried that you will need your money sooner than the project is
              finished? You can exit your investments early at any time by
              listing the investment on the Secondary Market.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="icon">💼</div>
          <div className="text-container">
            <h2 className="heading">Antidote for Inflation</h2>
            <p className="description">
              In most of the projects, income from rent is adjusted to inflation
              to protect your capital from depreciation. The historical data of
              the real estate market shows that real estate tends to outperform
              inflation by around 1% in the long run.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="icon">🔒</div>
          <div className="text-container">
            <h2 className="heading">Collateral and Security</h2>
            <p className="description">
              All investments on the InRento platform are secured by 1st-rank
              mortgages. In most of the projects, the interest rate that is
              being paid by the borrower doesn’t exceed the rental income, which
              reduces the borrower’s default risk.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="icon">📞</div>
          <div className="text-container">
            <h2 className="heading">Available When You Need</h2>
            <p className="description">
              Any questions or concerns about projects or the platform itself?
              No worries—schedule a call below with our licensed investment
              experts at the time of your convenience.
            </p>
            <a className="call-to-action" href="#">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
