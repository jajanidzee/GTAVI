import React from "react";
import img from "../../Img/GTA5.svg";
import img2 from "../../Img/GTaonline.svg";
import img3 from "../../Img/Red.svg";
import img4 from "../../Img/RedOnline.svg";
import Buttons from "../../Button/Buttons";
const GameList = () => {
  return (
    <div className="w-[1160px] bg-[#020202] m-auto flex flex-col mb-[112px] ">
      <div className="flex items-center justify-between mb-[40px]">
        <h1 className="text-[#F6F6F6] text-[48px]">Jogos em Destaque</h1>
        <div className="flex gap-[16px]">
          <button className="w-[70px] h-[32px] bg-[#606060] text-[#F6F6F6] rounded-full text-s[16px]">
            PC
          </button>
          <button className="w-[106px] h-[32px] bg-[#606060] text-[#F6F6F6] rounded-full text-s[16px]">
            Consoole
          </button>
          <button className="w-[196px] h-[32px] bg-[#606060] text-[#F6F6F6] rounded-full text-s[16px]">
            Dispositivos Portateis
          </button>
        </div>
      </div>
      <div className="flex gap-[40px] mb-[64px]">
        <img src={img} alt="GTA5Photo" />
        <img src={img2} alt="GTAonlinePhoto" />
        <img src={img3} alt="REd2Photo" />
        <img src={img4} alt="RedOnlinePhoto" />
      </div>
      <div className="m-auto">
        <Buttons btn1="Ver todos os jogos" />
      </div>
    </div>
  );
};

export default GameList;
