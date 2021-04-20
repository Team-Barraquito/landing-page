import { LitElement, html, css, unsafeCSS } from "lit-element";

class SingleParagraphRight extends LitElement {
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
        font-size: 2.5rem;
        margin: 0;
        color: #ffec02;
      }

      .text {
        font-size: 1.25rem;
        padding: 0.625rem 0 0.625rem 0;
        margin: 0;
      }

      @media screen and (max-width: 768px) {
        .title {
          font-size: 1.5rem;
          margin: 0;
          color: #ffec02;
        }

        .text {
          font-size: 0.8rem;
          padding: 0.625rem 0 0.625rem 0;
          margin: 0;
        }
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
        <h2 class="title">Festival Boreal</h2>
        <p class="text">
          Del 25 al 29 de Mayo de 2021 | <br>
          el casco histórico tinerfeño
          de los Silos albergará el Festival Internacional Boreal.
        </p>
      </div>`;
  }
}

customElements.define("single-paragraph-right", SingleParagraphRight);
