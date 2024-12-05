"use client";

import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <motion.div
      style={{ background: "#d75a5a", height: "100%", width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default MainSection;
