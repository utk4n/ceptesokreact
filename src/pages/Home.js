import React from "react";
import StoreInfo from "../components/StoreInfo/StoreInfo";
import Banner from "../components/BannerContent/Banner";
import Section from "../components/Section/Section";
import Categories from "../components/Categories/Categories";

const Home = () => {
  return (
    <>
      <StoreInfo />
      <Banner />
      <Section />
      <Categories />
    </>
  );
};

export default Home;
