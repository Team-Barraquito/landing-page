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
        color: #FFEC02;
      }

      .text {
        font-size: 1.25rem;
        padding: 0.625rem 0 0 0;
        margin: 0;
      }
`;
  }

  // TODO cambiar texto aqui
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
          Del 19 al 22 de Septiembre de 2019,
          el casco histórico del municipio tinerfeño
          de los Silos albergó el Festival Internacional Boreal. 
        </p>
      </div>`;
  }
}

customElements.define("single-paragraph-right", SingleParagraphRight);
