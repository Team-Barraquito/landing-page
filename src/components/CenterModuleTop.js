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

    :host .globalContainer {
      width: 100%;
      height: 50%;
    }

    :host .globalContainer .firstContent {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host .globalContainer .firstContent .textContainer {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
    }

    :host .globalContainer .firstContent .textContainer h3 {
      margin: 0;
      font-size: 5.625rem;
      text-align: right;
      line-height: 80px;
      transform: translateX(115px);
    }

    :host .globalContainer .firstContent .textContainer p {
      margin: 0;
      font-size: 1.25rem;
      text-align: right;
      padding: 80px 10px 0 0;
    }

    :host .globalContainer .firstContent .imageContainer {
      height: 100%;
      width: 50%;
      overflow: hidden;
    }
`;
  }

  render () {
    return html`
    <div class="globalContainer">
      <div class ="firstContent">
        <div class ="textContainer">
          <h3> Études de nu </h3>
          <p> Krull edita en 1930 el portafolio Étude de nu,
              con 24 fotograbados de desnudos, en cuyo texto
              de presentación va a intentar explicar qué significa
              para ella la fotografía y quién es el verdadero fotógrafo.
          </p>
        </div>
        <div class="imageContainer">
         <img src ="../assets/images/Imagen2.jpg" alt="imagen de artista" />
        </div>
      </div>
    </div>
    </div>`;
  }
}
customElements.define("center-module-top", CenterModuleTop);
