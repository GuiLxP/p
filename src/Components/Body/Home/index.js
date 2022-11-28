import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";
import "./index.css";

export const Home = () => {
  return (
    <>
      <div className="container.is-fluid columns is-horizontal">
        <div className="column is-12">
          <section className="section is-large ">
            <div className="box">
              <h1 className="title is-1 has-text-centered">
                <TypeAnimation
                  sequence={[
                    "Hello!!",
                    1000,
                    "Nice to meet you!",
                    1000,
                    "I'm Guilherme Pantoja!",
                    2000,
                    "I'm a Front-End Student...",
                    1000,
                    "I'm a Pianist...",
                    1000,
                    "I'm a Husband...",
                    1000,
                    "Welcome to my portfolio!",
                    500,
                    "I hope you enjoy it!",
                  ]}
                />
              </h1>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
