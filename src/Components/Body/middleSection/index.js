import "./index.css";
import { Organo } from "./Organo";
import { Tracker } from "./Tracker";

export const MiddleSection = () => {
  return (
    <>
      <section className="hero is-fullheight is-black ">
        <div className="section has-text-centered">
          <h1 className=" title">Principais Projetos</h1>
          <span className="subtitle">
            Alguns dos meus projetos no qual realizei em 6 meses de experiência
            com Front
          </span>
        </div>
        <div className="container is-centered">
          <div className="column">
            <Organo />
          </div>
          <div className="column">
            <Tracker />
          </div>
        </div>
      </section>
    </>
  );
};
export default MiddleSection;
