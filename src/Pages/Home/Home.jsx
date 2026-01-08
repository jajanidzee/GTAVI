import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import GTAVIBanner from "../../Components/HomeComponents/GTAVIBanner/GTAVIBanner";
import GameList from "../../Components/HomeComponents/GameList/GameList";
import GameTrailer from "../../Components/HomeComponents/GameTrailer/GameTrailer";
import RockStarLauncher from "../../Components/HomeComponents/RockStarLauncher/RockStarLauncher";

const Home = () => {
  return (
    <div>
      <Header />
      <GTAVIBanner />
      <GameList />
      <GameTrailer />
      <RockStarLauncher />
      <Footer />
    </div>
  );
};

export default Home;
