import { LitElement, html, css } from "lit-element";

class SingleParagraph extends LitElement {
  static get styles () {
    return css`
      :host {
        font-family: 'Monument Extended';
        color: white;
      }

      div {
        background: black;
        width: 640px;
        height: auto;
      }

      .title {
        font-size: 40px;
        margin: auto;
      }

      .text {
        font-size: 20 px;
        margin: auto;
        padding: 10px 0px 0px 0px;
      }`;
  }

  render () {
    return html`
      <div class="single-paragraph">
        <h2 class="title">Lorem ipsum</h2>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipiscing elit at etiam, ridiculus senectus montes facilisi non donec lectus condimentum faucibus proin.</p>
      </div>`;
  }
}

customElements.define("single-paragraph", SingleParagraph);
