// import CardItems from "./CardItems";
// import card1 from "../Assets/card1.jpg";
// import card2 from "../Assets/card2.jpg";
// import card3 from "../Assets/card3.jpg";
// const projects = [
//   {
//     image: card1,
//     badge: "1ST-RANK MORTGAGE",
//     title: "V9, Biržai III",
//     location: "BIRŽAI",
//     progress: "96.79%",
//     amount: "€ 53 681 (96.79%)",
//     interest: "9% - 9.4%",
//     capitalGains: "FIXED 1.5% ANNUALLY",
//     term: "36 MONTHS",
//     distribution: "MONTHLY",
//   },
//   {
//     image: card2,
//     badge: "1ST-RANK MORTGAGE",
//     title: "Bajorai 20, Vilnius I",
//     location: "VILNIUS",
//     progress: "46.47%",
//     amount: "€ 164 978 (46.47%)",
//     interest: "9% - 9.5%",
//     capitalGains: "30% FROM PROFIT",
//     term: "18 MONTHS",
//     distribution: "MONTHLY",
//   },
//   {
//     image: card3,
//     badge: "1ST-RANK MORTGAGE",
//     title: "K36, Panevėžys V",
//     location: "PANEVĖZYS",
//     progress: "86.86%",
//     amount: "€ 86 859 (86.86%)",
//     interest: "9% - 9.5%",
//     capitalGains: "FIXED 1.5% ANNUALLY",
//     term: "24 MONTHS",
//     distribution: "MONTHLY",
//   },
// ];
// const CardSection = () => {
//   return (
//     <section className="card-main">
//       <div className="card-heading">
//         <div className="content-3 ">
//           <h1>
//             Most Recent <br />
//             <strong>Projects</strong>
//           </h1>
//         </div>
//         <div className="more-statistics">
//           <a href="#">Discover Investment opportunities →</a>
//         </div>
//       </div>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <CardItems key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };
// export default CardSection;
// CardSection.jsx
import React from "react";
import { FiMapPin } from "react-icons/fi";
import card1 from "../Assets/card1.jpg";
import card2 from "../Assets/card2.jpg";
import card3 from "../Assets/card3.jpg";
import "./CardSection.css";

const projects = [
  {
    image: card1,
    badge: "1ST-RANK MORTGAGE",
    title: "V9, Biržai III",
    location: "BIRŽAI",
    progress: "96.79%",
    amount: "€ 53 681 (96.79%)",
    interest: "9% - 9.4%",
    capitalGains: "FIXED 1.5% ANNUALLY",
    term: "36 MONTHS",
    distribution: "MONTHLY",
  },
  {
    image: card2,
    badge: "1ST-RANK MORTGAGE",
    title: "Bajorai 20, Vilnius I",
    location: "VILNIUS",
    progress: "46.47%",
    amount: "€ 164 978 (46.47%)",
    interest: "9% - 9.5%",
    capitalGains: "30% FROM PROFIT",
    term: "18 MONTHS",
    distribution: "MONTHLY",
  },
  {
    image: card3,
    badge: "1ST-RANK MORTGAGE",
    title: "K36, Panevėžys V",
    location: "PANEVĖZYS",
    progress: "86.86%",
    amount: "€ 86 859 (86.86%)",
    interest: "9% - 9.5%",
    capitalGains: "FIXED 1.5% ANNUALLY",
    term: "24 MONTHS",
    distribution: "MONTHLY",
  },
];

const CardSection = () => {
  return (
    <section className="card-main">
      <div className="card-heading">
        <div className="content-3">
          <h1>
            Most Recent <br />
            <strong>Projects</strong>
          </h1>
        </div>
        <div className="more-statistics">
          <a href="#">Discover Investment opportunities →</a>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="investment-card">
            <img
              src={project.image}
              alt={project.title}
              className="investment-image"
            />
            <div className="badge">{project.badge}</div>
            <div className="investment-details">
              <h3 className="investment-title">{project.title}</h3>
              <p className="investment-location">
                <FiMapPin /> {project.location}
              </p>
              <div className="investment-progress">
                <div
                  className="progress-bar"
                  style={{ width: project.progress }}
                ></div>
              </div>
              <p className="investment-amount">{project.amount}</p>
              <div className="investment-info">
                <p>
                  <span>FIXED ANNUAL INTEREST</span> {project.interest}
                </p>
                <p>
                  <span>CAPITAL GAINS</span> {project.capitalGains}
                </p>
                <p>
                  <span>MAXIMUM TERM</span> {project.term}
                </p>
                <p>
                  <span>INTEREST DISTRIBUTION</span> {project.distribution}
                </p>
              </div>
              <button className="invest-button">Invest Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
