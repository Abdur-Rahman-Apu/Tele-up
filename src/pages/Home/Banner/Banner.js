import React from "react";
import Blog from "../../../assets/Banner/banner.jpg"

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${Blog})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hi, Welcome</h1>
          <p className="mb-5">Knowledge is power. To make real your dream, you have to gain knowledge.Tele-up is a blog website which will help you to gain knowledge.</p>
          {/* <button className="btn bg-sky-500 border-0">Explore</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
