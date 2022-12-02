import "./index.css";

export const MiddleSection = () => {
  return (
    <>
      <section className="hero is-fullheight is-black ">
        <div className="hero-body">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-6">
              <h1 className="title">Principais </h1>
              <span className="subtitle">
                Alguns dos meus projetos no qual realizei em 6 meses de
                experiência com Front
              </span>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child notification is-dark">
                    <div class="content">
                      <p class="title">Organo</p>
                      <p class="subtitle">
                        O projeto consiste em ter um organograma onde você
                        preenche as informações e vai montando times de acordo
                        com os dados preenchidos
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-dark">
                <p class="title">Organo</p>
                <a
                  href="https://organo-64bkxtdd5-guilhermematheus166-gmailcom.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  noopener
                >
                  <span className="subtitle">Click here for demonstration</span>
                </a>
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    alt=""
                  />
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MiddleSection;
