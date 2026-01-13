import React from "react";
import img from "../../Img/RockStarLogo.svg";
import img2 from "../../Img/fundo.png";
import Buttons from "../../Button/Buttons";
import img3 from "../../Img/GamesLauncher.jpg";
const RockStarLauncher = () => {
  return (
    <div
      className="w-[1160px] h-[500px] bg-red-400 m-auto pt-[32px] pb-[32px] pl-[76px] rounded-[16px] flex gap-[81.79px] items-center mb-[95px]"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <div className="pt-[45px]">
        <div className="flex items-center gap-[18.24px] mb-[32px]">
          <img src={img} alt="RockStarLogoPhoto" />
          <p className="text-[41.57px] font-extrabold text-[#020202]">
            Games <br /> Launcher
          </p>
        </div>
        <p className=" text-[#020202]  text-[32px] font-medium mb-[64px]">
          Todos os seus jogos <br /> em um so lugar.
        </p>
        <Buttons btn1="Download" />
      </div>
      <img src={img3} alt="GamesLauncherPhoto" />
    </div>
  );
};

export default RockStarLauncher;
