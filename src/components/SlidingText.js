import { LitElement, html, css } from "lit-element";

class SlidingText extends LitElement {
  render () {
    return html`<div> Hola! </div>`;
  }
}

customElements.define("sliding-text", SlidingText);
