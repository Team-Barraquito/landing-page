import { LitElement, html, css } from "lit-element";

class SlidingText extends LitElement {
  static get styles () {
    return css`    
      :host {
        font-family: 'Monument Extended';
        color: yellow;
        font-size: 2.8rem;
      }
      
      .text-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        width: 65%;
        height: 100px;
        background: black;
      }

      span {
        padding: 10px;
      }
      `;
  }

  render () {
    return html`
      <div class="text-container">
        <span>Suscríbete /</span>
        <span>Suscríbete /</span>
        <span>Suscríbete /</span>
      </div>`;
  }
}

customElements.define("sliding-text", SlidingText);
