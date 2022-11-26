import "./index.css";

export const Body = () => {
  return (
    <>
      <div className="container.is-fluid columns is-gapless">
        <div className="column is-4 ">
          <section className="hero is-medium is-success">
            <div className="hero-body ">
              <p className="title">Guilherme</p>
              <p className="subtitle">Pantoja</p>
            </div>
          </section>
        </div>
        <div className="column is-8">
          <section className="hero is-success">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <p class="title">Vertical...</p>
                  <p class="subtitle">Top tile</p>
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">...tiles</p>
                  <p class="subtitle">Bottom tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <p class="title">Middle tile</p>
                  <p class="subtitle">With an image</p>
                  <figure class="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt=""
                    />
                  </figure>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Body;
