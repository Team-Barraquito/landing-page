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

    :host .globalContainer {
      width: 100%;
      height: 50%;
    }

    :host .globalContainer .secondContent {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host .globalContainer .secondContent .secondTextContainer {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
    }

    :host .globalContainer .secondContent .secondTextContainer h3 {
      margin: 0;
      font-size: 5.625rem;
      text-align: left;
      line-height: 80px;
      transform: translateX(-115px);
    }

    :host .globalContainer .secondContent .secondTextContainer p {
      margin: 0;
      font-size: 1.25rem;
      text-align: left;
      padding: 60px 0 0 10px;
    }

    :host .globalContainer .secondContent .imageContainer {
      height: 100%;
      width: 50%;
      overflow: hidden;
    }
`;
  }

  render () {
    return html`
    <div class="globalContainer">
      <div class ="secondContent">
      <div class="imageContainer">
       <img src ="../assets/images/Imagen1.jpg" alt="imagen de artista" />
      </div>
      <div class ="secondTextContainer">
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
