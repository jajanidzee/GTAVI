import React from "react";
import img from "../Img/Logo.svg";
import img2 from "../Img/iconePesquisar.svg";
import img3 from "../Img/iconelogin.svg";
import { motion } from "motion/react";
import { a } from "motion/react-client";
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
          <a href="https://www.rockstargames.com/gta-v" target="blank">
            {" "}
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              src={img}
              alt="LogoImg"
            />
          </a>
          <ul>
            {Row.map((Text, index) => (
              <li
                key={Text}
                className="text-[16px] text-[#FFFFFF] flex gap-[24px]"
              >
                <a href="https://www.rockstargames.com/gta-v" target="blank">
                  {" "}
                  <span>{Text.Jogos}</span>
                </a>
                <a href="https://www.rockstargames.com/gta-v" target="blank">
                  {" "}
                  <span>{Text.Ajuda}</span>
                </a>
                <a href="https://www.rockstargames.com/gta-v" target="blank">
                  {" "}
                  <span>{Text.Loja}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-[40px]">
          <a href="https://www.rockstargames.com/gta-v" target="blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="w-[193px] h-[52px] bg-[#FCAF17] rounded-[8px] font-medium cursor-pointer"
            >
              Baixe o Launcher
            </motion.button>
          </a>
          <div className="flex gap-[24px]">
            {" "}
            <a href="https://www.rockstargames.com/gta-v" target="blank">
              {" "}
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
                src={img2}
                alt="ScopeImg"
              />
            </a>
            <a href="https://www.rockstargames.com/gta-v" target="blank">
              {" "}
              <motion.img
                className="cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
                src={img3}
                alt="LoginImg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
