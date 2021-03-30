import { LitElement, html, css, unsafeCSS } from "lit-element";

class SingleParagraphLeft extends LitElement {
  static get properties () {
    return {
      alignment: String,
    };
  }

  static get styles () {
    return css`
      :host {
        font-family: "Monument Extended", "Roboto", sans-serif;
        color: white;
        width: 100%;
        height: 100%;
      }

      div {
        width: 100%;
        height: auto;
        text-align: var(--text-alignment, left);
      }

      .title {
        font-size: 40px;
        margin: 0;
        color: #ffec02;
      }

      .text {
        font-size: 20 px;
        white-space: pre-line;
        margin: 0;
      }
`;
  }

  render () {
    return html`
    <style>
      :host {
      --text-alignment: ${unsafeCSS(this.alignment)}
      }
    </style>

      <div class="single-paragraph">
        <h2 class="title">Pablo López</h2>
        <p class="text">
            In concert | Pabellón de Deportes de Tenerife Santiago Martín | vie 17 sept | 20:00 |
        </p>
      </div>`;
  }
}

customElements.define("single-paragraph-left", SingleParagraphLeft);
