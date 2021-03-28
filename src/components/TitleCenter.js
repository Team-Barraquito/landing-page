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
    :host .globalContainer{
      width: 100%;
      height: 100%; 
      background-color: green;
    }
    :host .globalContainer .firstContent {
      width: 100%;
      height: 50%;
      background-color: red;
      display: flex;
    }
    :host .globalContainer .firstContent .textContainer h3 {
      margin: 0;
      font-size: 90px;
    }
    :host .globalContainer .firstContent .textContainer p {
      margin: 0;
      font-size: 20px;
    }
    :host .globalContainer .firstContent .imageContainer {
      width: 50%;
      heigth: 100%;
    }
    :host .globalContainer .firstContent .imageContainer img {
      width: 100%;
      height: 100%;
    }
    `;
  }

  render () {
    return html`
    <div class="globalContainer">
      <div class ="firstContent"> 
        <div class ="textContainer">
          <h3> Lore Ipsum </h3>
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










    <!--
    <div class="primer_container">
      <div class="title">
        <div class="parrafo">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.
            Quas sint, perspiciatis tempore odit laudantium perferendis necessitatibus
            possimus adipisci. Placeat, repudiandae.
            Voluptatum exercitationem facilis reprehenderit nobis ipsa. Iure,
            illum eveniet? Odit? 
          </p>
        </div>
        <div class="imageContainer" > 
          <img src="../assets/images/concert-1.jpg"> 
        </div> 
      </div>

    <div class="segundo_title">
      <div class="imageContainer" >
        <img src="../assets/images/concert-2.jpg">
      </div>
      <div class="parrafo2">
        <h3>Lorem Ipsum </h3>
          <p>
            Lorem ipsum 2, dolor sit amet consectetur adipisicing elit.
            Quas sint, perspiciatis tempore odit laudantium perferendis necessitati
            possimus adipisci. Placeat, repudiandae.
            Voluptatum exercitationem facilis reprehenderit nobis ipsa. Iure,
            illum eveniet? Odit?
          </p>
      </div>   
    </div>
  </div> -->
`;
  }
}
customElements.define("title-center", TitleCenter);

