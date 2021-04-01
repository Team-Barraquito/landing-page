import { LitElement, html, css } from "lit-element";

class YellowFillet extends LitElement {
  static get styles () {
    return css`
      .container {
        border: 1px solid #a200ff;
        width: 100%;
        height: auto;
      }

      .container .fillet {
        width: 100%;
        height: 100%;
        border-bottom: solid 0.125rem #FFEC02;
        margin: 0 0 0.625rem 0;
      }

      .container a {
        border: 1px solid red;
        font-family: 'Monument Extended';
        text-decoration: none;
        color: #ffec02;
      }
      @media screen and (max-width: 768px) {
        .container {
          border: 4px solid #d400ff;
          width: 100%;
          height: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container .fillet {
          width: 100%;
          height: 100%;
          border-bottom: solid 0.125rem #FFEC02;
          margin: 0 0 0.625rem 0;
        }

        .container a {
          font-family: 'Monument Extended';
          text-decoration: none;
          color: #ffec02;
        }
      }
  `;
}
  }

  render () {
    return html`
      <div class = "container">
        <div class="fillet"> </div>
        <a href="#"> Suscríbete </a>
      </div>`;
  }

customElements.define("yellow-fillet", YellowFillet);
