import { LitElement, html, css } from "lit-element";

class TitleCenter extends LitElement {
  static get styles () {
    return css`
    :host{
      width: 100%;
      heigth: 100%;
      font-family: "Monument Extended";
      color: white;
    }
    :host .globalContainer { 
      width: 100%;
      height: 100%; 
      background-color: green;
    }
    :host .globalContainer .firstContent {
      width: 100%;
      height: 100%;
      background-color: red;
      display: flex;
    }

    :host .globalContainer .firstContent .textContainer {
      height: 100%;
      width: 50%;
      background: purple;
    }

    :host .globalContainer .firstContent .textContainer h3 {
      margin: 0;
      font-size: 5.625rem;
      display: inline;
    }

    :host .globalContainer .firstContent .textContainer p {
      margin: 0;
      font-size: 1.25rem;
    }

    :host .globalContainer .firstContent .imageContainer {
      height: 100%;
      width: 50%;
      background: lightblue;
    }

    `;
  }

  render () {
    return html`
    <div class="globalContainer">
      <div class ="firstContent"> 
        <div class ="textContainer">
          <h3> Krull </h3>
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

      <div class ="secondtContent"> 
      <div class ="textContainer">
        <h3> Basil Kincaid </h3>
        <p> Krull edita en 1930 el portafolio Étude de nu,
            con 24 fotograbados de desnudos, en cuyo texto
            de presentación va a intentar explicar qué significa
            para ella la fotografía y quién es el verdadero fotógrafo.
        </p>
      </div>
      <div class="imageContainer">
       <img src ="../assets/images/Imagen1.jpg" alt="imagen de artista" />
      </div>
    </div>

    </div>`;
  }
}
customElements.define("title-center", TitleCenter);
