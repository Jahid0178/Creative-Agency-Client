import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Clients></Clients>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
