import React from "react";
import img from "../Img/Logo.svg";
import img2 from "../Img/iconePesquisar.svg";
import img3 from "../Img/iconelogin.svg";
const Row = [
  {
    Jogos: "Jogos",
    Loja: "Loja",
    Ajuda: "Ajuda",
  },
];

const Header = () => {
  return (
    <div>
      <div className="pl-[140px] pt-[29px] pr-[140px] pb-[32px] bg-[#020202] h-[112px] flex items-center justify-between">
        <nav className="flex gap-[47px] items-center">
          {" "}
          <img src={img} alt="LogoImg" />
          <ul>
            {Row.map((Text, index) => (
              <li
                key={Text}
                className="text-[16px] text-[#FFFFFF] flex gap-[24px]"
              >
                <span key={Text}>{Text.Jogos}</span>
                <span key={Text}>{Text.Loja}</span>
                <span key={Text}>{Text.Ajuda}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-[40px]">
          <button className="w-[193px] h-[52px] bg-[#FCAF17] rounded-[8px]">
            Baixe o Launcher
          </button>
          <div className="flex gap-[24px]">
            {" "}
            <img src={img2} alt="ScopeImg" />
            <img src={img3} alt="LoginImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
