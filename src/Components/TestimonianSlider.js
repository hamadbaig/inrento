// TestimonialsSlider.js
import Slider from "react-slick";
import Testimonials from "./Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    rating: "★★★★★",
    title: "Investing in real estate was never easier",
    content:
      "InRento is an excellent overall alternative to traditional investing in real estate. I highly recommend having a call with one of their team members before starting to invest. This has helped me a lot in understanding how the platform works.",
    author: "MIHAI VICTOR",
  },
  {
    rating: "★★★★★",
    title: "I've been investing on InRento platform for more than a year",
    content:
      "I've been investing on InRento platform for more than a year. During this period not a single project was late, interest was paid on time and if I would have any questions customer support solves them within days. For many years I've been investing in a traditional way: buy rental properties and renting them. However, with every month I'm increasing my InRento portfolio because it doesn't require any management and every month I'm getting interest payments.",
    author: "ANDRIUS GUZAUSKAS",
  },
  {
    rating: "★★★★★",
    title: "An excellent European platform",
    content:
      "InRento is quickly becoming the most trusted platform in Europe with a very high return ratio i.e return on investment.",
    author: "JAMES CODY",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h2 className="title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonials key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
