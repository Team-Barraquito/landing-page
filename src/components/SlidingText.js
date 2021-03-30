import { LitElement, html, css, unsafeCSS } from "lit-element";

class SlidingText extends LitElement {
  static get properties () {
    return {
      text: String,
      color: String,
      slide: String,
      slash: String,
      stroke: String,
    };
  }

  static get styles () {
    return css`
      :host {
        font-family: 'Monument Extended';
        font-size: 2.75rem;
        width: 100%;
        overflow: hidden;
        color: var(--text-color, #ffec02);
      }

      :host .text-container {
        width: 100%;
        display: flex;
        overflow: hidden;
      }

      :host .text-container .moving-text {
        padding: 0 5px;
        margin: 0;
        white-space: nowrap;
        color: var(--text-color, #ffec02);
        text-transform: uppercase;
        -webkit-text-stroke: var(--text-stroke, unset);
        animation: slide 30s linear infinite var(--slide-direction, normal);
      }

      :host .text-container:hover .moving-text,
      :host .text-container:hover .moving-text:nth-child(2) {

        animation-play-state: paused;
      }

      :host .text-container .moving-text:nth-child(2) {
        animation: delay-slide 30s linear infinite var(--slide-direction, normal);
        animation-delay: -15s;
      }

      @keyframes slide {
        0% {
          transform: translateX(100%);
        }

        100% {
          transform: translateX(-100%);
        }
      }

      @keyframes delay-slide {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-200%);
        }
      }
`;
  }

  render () {
    return html`
      <style>
        :host {
          --text-color: ${unsafeCSS(this.color)};
          --slide-direction: ${unsafeCSS(this.slide)};
          --text-stroke: ${unsafeCSS(this.stroke)};
        }
      </style>
      <div class="text-container">
        <p class="moving-text">
          ${(this.text + " " + this.slash + " ").repeat(8)}
        </p>
        <p class="moving-text">
          ${(this.text + " " + this.slash + " ").repeat(8)}
        </p>
      </div>

      `;
  }
}

customElements.define("sliding-text", SlidingText);
