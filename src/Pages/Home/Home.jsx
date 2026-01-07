import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import GTAVIBanner from "../../Components/HomeComponents/GTAVIBanner/GTAVIBanner";
import GameList from "../../Components/HomeComponents/GameList/GameList";

const Home = () => {
  return (
    <div>
      <Header />
      <GTAVIBanner />
      <GameList />
      <Footer />
    </div>
  );
};

export default Home;
