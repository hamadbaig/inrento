import graphsvg from "../Assets/graph.svg";
const Graph = () => {
  return (
    <div className="section-graph">
      <div className="graph-svg">
        <img src={graphsvg} alt="graph svg" className="graph-svg"></img>
      </div>
      <div className="graph-content">
        <h1 className="title2">
          {" "}
          InRento VS <br />
          <strong>Inflation</strong>
        </h1>
        <p>
          If you invested 5 years ago 10,000 EUR, with an average of 8%, today
          you would have 14336.56 EUR. If you hadn't invested during the same 5
          years, your 10,000 EUR would be barely worth today 9,035 EUR based on
          official inflation data by European Commission.
        </p>
        <div className="graph-container">
          <div className="statistic-item">
            <span className="statistic-value">39M€</span>
            <span className="statistic-label">
              Principal investments repaid
            </span>
          </div>
          <div className="statistic-item">
            <span className="statistic-value">11.2%</span>
            <span className="statistic-label">
              Average investment return p.a.
            </span>
          </div>
          <div className="statistic-item">
            <span className="statistic-value">0</span>
            <span className="statistic-label">Late Loans</span>
          </div>
        </div>
        <a className="call-to-action" href="#">
          Learn more
        </a>
      </div>
    </div>
  );
};
export default Graph;
