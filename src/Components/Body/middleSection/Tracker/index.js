export const Tracker = () => {
  return (
    <>
      <div class="tile is-vertical ">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-dark">
              <div class="content has-text-centered">
                <p class="title">Tracker</p>
                <p class="subtitle">
                  O projeto consiste em ter um contador de tempo onde você
                  poderá ver e registrar o tempo de suas atividades.
                </p>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-dark">
                  <a
                    href="https://tracker-lyart.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    noopener
                  >
                    <span className="subtitle">
                      Click here for demonstration
                    </span>
                  </a>
                  <figure class="image is-4by4 ">
                    <img src="/assets/tracker.png" alt="" />
                  </figure>
                </article>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
