import { LitElement, html, css } from "lit-element";

class SlidingText extends LitElement {
  static get styles () {
    return css`    
      :host {
        font-family: 'Monument Extended';
        color: #FFEC02;
        font-size: 2.8rem;
        display: flex;
        align-items: center;

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
        text-align: center;
        animation: sliding 10s infinite cubic-bezier(.075,.18,.60,.83);
        margin: 0;
      }

      .text-container:hover {
        animation-play-state: paused;
      }
      `;
  }

  render () {
    return html`
      <p class="text-container">
          Suscríbete / Suscríbete / Suscríbete / Suscríbete /
      </p>`;
  }
}

customElements.define("sliding-text", SlidingText);

/*
 *  TODO
 * coger el atributo name o algo y con ello hacer un stylemap
 */
