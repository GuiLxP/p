import { motion } from "framer-motion";
import { useState } from "react";
import "./index.css";

export const middleSection = () => {
  return (
    <>
      <section className="hero is-fullheight is-black ">
        <motion.div className="hero-body">
          <h1 className="title has-text-centered">Principais Projetos</h1>
        </motion.div>
      </section>
    </>
  );
};
export default middleSection;
