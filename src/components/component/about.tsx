import React from "react";

export const About: React.FC = () => {
  return (
    <div id="about" className="h-[70vh] mt-[60px] p-8 pb-[60px] flex flex-col lg:flex-row lg:items-center">
      <div className="container flex-1 mx-auto px-4">
        <h1 className="text-3xl text-white font-bold outline-8 mb-4">
          About
          <span className="text-blue-500"> Starry Scoop</span>
        </h1>
        <p className="text-white">
          Welcome to Starry Scoop, your go-to source for all the latest astrological news. Whether you're a seasoned
          astrologer or just curious about the stars, we've got you covered.
        </p>
        <p className="text-white mt-4">
          Our team of expert astrologers and researchers work tirelessly to bring you the most accurate and up-to-date
          information. From daily horoscopes to in-depth analysis of celestial events, we strive to provide you with
          valuable insights and guidance.
        </p>
        <p className="text-white mt-4">
          Explore our articles, sign up for our newsletter, and join our vibrant community of astrology enthusiasts.
          We're here to help you navigate the cosmos and discover the wonders of the universe.
        </p>
      </div>

      <div className="hidden lg:flex  container flex-1 mx-auto px-4 shadow-2xl p-4">
        <img src="/star.jpg" alt="logo" className="w-full h-[400px] rounded-[10px]" />
      </div>
    </div>
  );
};

export default About;
