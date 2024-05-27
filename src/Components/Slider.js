// InThePressSlider.js
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h1 from "../Assets/hp1.png";
import h2 from "../Assets/hp2.png";
import h3 from "../Assets/hp3.png";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const pressItems = [
    {
      img: h1,
      title: "Forbes",
      description:
        "Thanks to a buy-to-let crowdfunding platform InRento, almost anyone can become a property investor today.",
    },

    {
      img: h2,
      title: "EU-Startups",
      description:
        "InRento has merged with the largest real estate aggregator in Europe EvoEstate, and become the EU’s largest licensed buy-to-let crowdfunding platform.",
    },
    {
      img: h3,
      title: "Emerging Europe",
      description:
        "Proptech start-up InRento has raised 530,000 euros for market expansion.",
    },
  ];

  return (
    <div className="in-the-press">
      <h2>In the press:</h2>
      <div>
        <Sliders {...settings}>
          {pressItems.map((item, index) => (
            <div key={index} className="press-item">
              {/* <div className="press-title">{item.title}</div> */}
              <div className="slider-img">
                <img src={item.img}></img>
              </div>
              <div className="press-description">{item.description}</div>
            </div>
          ))}
        </Sliders>
      </div>
    </div>
  );
};

export default Slider;
