import React from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  console.log(useLocation());
  return <div>HomePage</div>;
};

export default HomePage;
