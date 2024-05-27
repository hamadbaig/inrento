// Statistics.jsx

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistic-item">
        <span className="statistic-value">1,825,368€</span>
        <span className="statistic-label">Investors' earnings</span>
      </div>
      <div className="statistic-item">
        <span className="statistic-value">11.15%</span>
        <span className="statistic-label">Average investment return p.a.</span>
      </div>
      <div className="statistic-item">
        <span className="statistic-value">0</span>
        <span className="statistic-label">Late projects</span>
      </div>
      <div className="more-statistics">
        <a href="#">More statistics →</a>
      </div>
    </div>
  );
};

export default Statistics;
