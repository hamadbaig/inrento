import video from "../Assets/video.jpg";
const Work = () => {
  return (
    <div className="work-container">
      <div>
        <h1 className="title">
          How InRento
          <br />
          <strong> works?</strong>
        </h1>
      </div>
      <div className="flex">
        <div className="work-card">
          <div className="number">
            <h1>01</h1>
          </div>
          <div className="work-head">
            <h1>Signing Up</h1>
          </div>
          <div className="desc">
            <p>
              Investors sign up, verify their identity and top up their
              investments account
            </p>
          </div>
        </div>
        <div className="work-card">
          <div className="number">
            <h1>02</h1>
          </div>
          <div className="work-head">
            <h1>Investing</h1>
          </div>
          <div className="desc">
            <p>
              Once the account is ready, investor invests in a buy-to-let
              project.
            </p>
          </div>
        </div>
        <div className="work-card">
          <div className="number">
            <h1>03</h1>
          </div>
          <div className="work-head">
            <h1>Securing</h1>
          </div>
          <div className="desc">
            <p>
              When project funding is completed, investments are being secured
              by placing a mortgage and only then funds are transferred to
              project owner.
            </p>
          </div>
        </div>
        <div className="work-card">
          <div className="number">
            <h1>04</h1>
          </div>
          <div className="work-head">
            <h1>Monthly Interest payouts</h1>
          </div>
          <div className="desc">
            <p>
              On a monthly basis interest from rental income is distributed as a
              fixed-interest. Even if the property is vacant, the project owner
              is obliged to pay fixed-interest to investors.
            </p>
          </div>
        </div>
        <div className="work-card">
          <div className="number">
            <h1>05</h1>
          </div>
          <div className="work-head">
            <h1>Project Completion</h1>
          </div>
          <div className="desc">
            <p>
              During the investment period the project owner is obliged to
              complete the project and repay investors. Based on the investment
              terms: fixed or variable capital gains shall be paid at project
              completion
            </p>
          </div>
        </div>
        <div className="work-card video">
          <img src={video} alt="video" className="v-dieo"></img>
        </div>
      </div>
    </div>
  );
};
export default Work;
