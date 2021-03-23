import { LitElement, html, css, unsafeCSS } from "lit-element";

class SlidingText extends LitElement {
  static get properties () {
    return {
      text: String,
      color: String,
      slide: String,
    };
  }

  static get styles () {
    return css`    
      :host {
        font-family: 'Monument Extended';
        font-size: 2.75rem;
        display: flex;
        align-items: center;
        overflow-x: hidden;
        width: 100vw;
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
        animation:
        sliding 10s 
        infinite 
        cubic-bezier(.070,.19,.60,.83)
        var(--slide-direction, normal);
        margin: 0;
        color: var(--text-color, #FFEC02);
        white-space: nowrap;
        padding: 10px;
      }

      .text-container:hover {
        animation-play-state: paused;
      }
      `;
  }

  render () {
    return html`
      <style>
        :host {
          --text-color: #${unsafeCSS(this.color)};
          --slide-direction: ${unsafeCSS(this.slide)};
        }
      </style>
      <p class="text-container">
        ${(this.text + " / ").repeat(7)}
      </p>`;
  }
}

customElements.define("sliding-text", SlidingText);
/*
 *  TODO
 * coger el atributo name o algo y con ello hacer un stylemap
 * overflow-x al parrafo
 */
