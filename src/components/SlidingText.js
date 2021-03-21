import { LitElement, html, css } from "lit-element";

class SlidingText extends LitElement {
  static get styles () {
    return css`    
      :host {
        font-family: 'Monument Extended';
        color: #FFEC02;
        font-size: 2.8rem;
      }

      @keyframes sliding {
       from {
        transform: translateX(100%);
       }
       to {
         transform: translateX(-120%);
       }
      }

      .text-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        animation: sliding 10s infinite linear;
      }

      .text-container:hover {
        animation-play-state: paused;
      }
      `;
  }

  render () {
    return html`
      <div class="text-container">
          Suscríbete / Suscríbete / Suscríbete /
      </div>`;
  }
}

customElements.define("sliding-text", SlidingText);

/*
 *  TODO
 * coger el atributo name o algo y con ello hacer un stylemap
 * tambien cambiar la velocidad de la animacion
 * mirar el ciclo de vida
 */
