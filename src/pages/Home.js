import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import StoreInfo from "../components/StoreInfo/StoreInfo";
import Banner from "../components/BannerContent/Banner";
import Section from "../components/Section/Section";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";

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
