import React from "react";
import img from "../../Img/GTA6.jpg";
import img2 from "../../Img/Rectangle25.svg";
import img3 from "../../Img/Rectangle24.png";
const GameTrailer = () => {
  return (
    <div className="w-[1160px] h-[632px] m-auto mb-[112px]">
      <h1 className="text-[#F6F6F6] text-[48px] font-bold mb-[40px]">
        Ultimas Noticias
      </h1>
      <div className="flex gap-[40px]">
        <div className="h-[860px]">
          <img
            src={img}
            alt="GTA6Photo"
            className=" mb-[20px] rounded-[16px]"
          />
          <p className="text-[white] text-[32px] pl-[32px]">
            Grand Theft Auto VI-Veja 1 trailer agora
          </p>
          <p className="text-[#797979] text-[16px] pl-[32px] font-light">
            Rockstar Games 5 de dezembro de 2023
          </p>
        </div>
        <div>
          <div
            className="w-[260px] h-[224px] bg-norepeat pl-[20px] pt-[185px] mb-[40px] "
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <p className="text-[13px] text-[white] mb-[4px]">
              1 Trailer.Terca-feira,5 de <br /> Dezembro.9h Et.
            </p>
            <p className="text-[#797979] font-light text-[12px] ">
              Rockstar Games 1 de dezeembro de 2023
            </p>
          </div>
          <div
            className=" w-[260px] h-[224px] bg-norepeat pl-[20px] pt-[185px] "
            style={{ backgroundImage: `url(${img3})` }}
          >
            <p className="text-[13px] text-[white] mb-[4px]">
              Nova atualizacao de GTA Online chegando em dezembro
            </p>
            <p className="text-[#797979] font-light text-[12px]">
              GTA Online 30 de novembro de 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTrailer;
