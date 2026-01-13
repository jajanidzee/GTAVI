import React from "react";
import { motion } from "motion/react";
const Buttons = ({ btn1, className }) => {
  return (
    <>
      <a
        href="https://www.rockstargames.com/gta-v"
        target="blank"
        className="cursor-pointer"
      >
        {" "}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="w-[260px] h-[63px] bg-[#FCAF17] rounded-[8px] text-[20px] text-[#020202] font-medium cursor-pointer"
        >
          {btn1}
        </motion.button>
      </a>
    </>
  );
};

export default Buttons;
