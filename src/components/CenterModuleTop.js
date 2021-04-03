import { LitElement, html, css } from "lit-element";

class CenterModuleTop extends LitElement {
  static get styles () {
    return css`
:host {
  width: 100%;
  height: 100%;
  font-family: "Monument Extended";
  color: white;
}

:host .global-container {
  width: 100%;
  height: 50%;
}

:host .global-container .first-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:host .global-container .first-content .text-container {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

:host .global-container .first-content .text-container h3 {
  margin: 0;
  font-size: 5.625rem;
  text-align: right;
  line-height: 5rem;
  transform: translateX(115px);
}

:host .global-container .first-content .text-container p {
  margin: 0;
  font-size: 1.25rem;
  text-align: right;
  padding: 3.65rem 0.625rem 0 0;
}

:host .global-container .first-content .image-container {
  height: 100%;
  width: 50%;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  :host .global-container .first-content .text-container h3 {
    margin: 0;
    font-size: 4.25rem;
    text-align: right;
    line-height: 5rem;
    transform: translateX(115px);
  }

  :host .global-container .first-content .text-container p {
    margin: 0;
    font-size: 1rem;
    text-align: right;
    padding: 3.65rem 0.625rem 0 0.625rem;
  }
}

@media screen and (max-width: 375px) {
  :host {
    width: 100%;
    height: 100px;
    font-family: "Monument Extended";
    color: white;
  }

  :host .global-container {
    width: 100%;
    height: auto;
  }

  :host .global-container .first-content .text-container h3 {
    margin: 0;
    font-size: 2.25rem;
    text-align: right;
    line-height: 2.5rem;
    transform: translateX(30%);
  }

  :host .global-container .first-content .text-container p {
    margin: 0;
    font-size: 0.8rem;
    text-align: right;
    padding: 3.65rem 0.625rem 0 0.625rem;
  }

  :host .global-container .first-content .image-container {
    width: 50%;
    height: auto;
    overflow: hidden;
  }
}
`;
  }

  render () {
    return html`
      <div class="global-container">
        <div class ="first-content">
          <div class ="text-container">
            <h3> Études de nu </h3>
            <p> Krull edita en 1930 el portafolio Étude de nu,
                con 24 fotograbados de desnudos, en cuyo texto
                de presentación va a intentar explicar qué significa
                para ella la fotografía y quién es el verdadero fotógrafo.
            </p>
          </div>
          <div class="image-container">
            <img src ="../assets/images/Etude.jpg" alt="Exposición Ètude"/>
          </div>
        </div>
      </div>`;
  }
}
customElements.define("center-module-top", CenterModuleTop);
