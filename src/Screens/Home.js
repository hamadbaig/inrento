import React from "react";
import Hero from "../Components/Hero";
import Statistics from "../Components/Statistics";
import CardSection from "../Components/CardSection";
import AboutUs from "../Components/AboutUs";
import Work from "../Components/Work";
import Graph from "../Components/Graph";
import Slider from "../Components/Slider";
import LatestNews from "../Components/Latestnews";
import TestimonialsSlider from "../Components/TestimonianSlider";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <CardSection />
      <AboutUs />
      <Work />
      <Graph />
      <Slider />
      <LatestNews />
      <TestimonialsSlider />
      <Footer />
    </>
  );
};
export default Home;
