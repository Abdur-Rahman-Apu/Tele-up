import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs/Blogs";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trending></Trending>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
