import React from "react";
import img from "../Img/BlackRockstar.png";
import img2 from "../Img/twitch.svg";
import img3 from "../Img/instagram.svg";
import img4 from "../Img/twitter.svg";
import img5 from "../Img/youtube.svg";
import img6 from "../Img/facebook.svg";
import { motion } from "motion/react";
const list = [
  {
    title: "CONTATO",
  },
  {
    title: "SOBRE",
  },
  {
    title: "SUPORTE",
  },
  {
    title: "EMPREGOS",
  },
];

const Footer = () => {
  return (
    <div className="pt-[91px] pl-[140px] pb-[107px] pr-[140px] flex justify-between">
      <div className="flex items-start gap-[40px] ">
        <a href="https://www.rockstargames.com/gta-v" target="blank">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="cursor-pointer"
            src={img}
            alt="BlackRockStarPhoto"
          />
        </a>
        <div>
          <ul className="text-[#797979] flex gap-[24px] text-[16px] mb-[7px]">
            {list.map((lists, index) => (
              <li key={lists}>{lists.title}</li>
            ))}
          </ul>
          <p className="text-[#797979] text-[13px]">
            ©2023 Rockstar Games, Inc. - YWR Studio.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[32px]">
        <a href="https://www.rockstargames.com/gta-v" target="blank">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-[24px] h-[24px] cursor-pointer"
            src={img2}
            alt="twitchPhoto"
            target
          />
        </a>
        <a href="https://www.rockstargames.com/gta-v" target="blank">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-[24px] h-[24px] cursor-pointer"
            src={img3}
            alt="instagramPhoto"
          />
        </a>
        <a href="https://www.rockstargames.com/gta-v" target="blank">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-[24px] h-[24px] cursor-pointer"
            cursor-pointer
            src={img4}
            alt="twitterPhoto"
          />
        </a>
        <a href="https://www.rockstargames.com/gta-v" target="blank">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-[24px] h-[24px] cursor-pointer"
            src={img5}
            alt="youtubePhoto"
          />
        </a>
        <a href="https://www.rockstargames.com/gta-v" target="blank">
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="w-[24px] h-[24px] cursor-pointer "
            src={img6}
            alt="facebookPhoto"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
