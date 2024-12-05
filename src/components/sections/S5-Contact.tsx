import { motion } from "framer-motion";
import { styled } from "styled-components";

const ContactSection = () => {
  return (
    <motion.div
      style={{ background: "#6f5ad7", height: "100%", width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>
  );
};

export default ContactSection;
