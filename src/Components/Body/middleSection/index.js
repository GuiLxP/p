import { motion } from "framer-motion";
import { useState } from "react";
import "./index.css";

export const middleSection = () => {
  return (
    <>
      <div className="container.is-fluid columns ">
        <div className="column is-12 ">
          <section className="hero is-medium ">
            <motion.div>
              <h1 className="title">Principais Projetos</h1>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};
export default middleSection;
