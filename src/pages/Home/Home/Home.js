import React from "react";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs/Blogs";
import Search from "../SearchCategory/Search/Search";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <Trending></Trending>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
