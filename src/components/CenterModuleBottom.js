import { LitElement, html, css } from "lit-element";

class CenterModuleBottom extends LitElement {
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

    :host .global-container .second-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host .global-container .second-content .image-container {
      height: 100%;
      width: 50%;
      overflow: hidden;
      position: relative;
    }

    :host .global-container .second-content .second-text-container {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
    }

    :host .global-container .second-content .second-text-container h3 {
      margin: 0;
      font-size: 5.625rem;
      text-align: left;
      line-height: 5rem;
      transform: translateX(-115px);
    }

    :host .global-container .second-content .second-text-container p {
      margin: 0;
      font-size: 1.25rem;
      text-align: left;
      padding: 3.65rem 0 0 0.625rem;
    }

    @media screen and (max-width: 768px) {
      :host .global-container .second-content .second-text-container h3 {
        margin: 0;
        font-size: 4.25rem;
        text-align: left;
        line-height: 5rem;
        transform: translateX(-115px);
      }

      :host .global-container .second-content .second-text-container p {
        margin: 0;
        font-size: 1rem;
        text-align: left;
        padding: 3.65rem 0.625rem 0 0.625rem;
      }
    }

    @media screen and (max-width: 375px) {
      :host .global-container .second-content .second-text-container h3 {
        margin: 0;
        font-size: 2.25rem;
        text-align: left;
        line-height: 2.5rem;
        transform: translateX(-30px);
      }

      :host .global-container .second-content .second-text-container p {
        margin: 0;
        font-size: 0.8rem;
        text-align: left;
        padding: 3.65rem 0.625rem 0 0.625rem;
      }
    }
`;
  }

  // TODO cambiar clases de aqui
  render () {
    return html`
      <div class="global-container">
        <div class ="second-content">
          <div class="image-container">
            <img src ="../assets/images/Kincaid.jpg" alt="Exposición Kincaid"/>
          </div>
          <div class ="second-text-container">
            <h3> Basil Kincaid </h3>
            <p> “A Restful Place” – Galería Leyendecker,
                enero 2021 – será una muestra de estudios
                caleidoscópicos de su imaginario. Dentro
                de estas obras las formas negativas anidadas
                se liberan y rebelan lo que ya está disponible.
            </p>
          </div>
        </div>
      </div>`;
  }
}
customElements.define("center-module-bottom", CenterModuleBottom);
