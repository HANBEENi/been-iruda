import { motion } from "framer-motion";
import { styled } from "styled-components";

const ResumeSection = () => {
  return (
    <motion.div
      style={{ background: "#d7845a", height: "100%", width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default ResumeSection;
