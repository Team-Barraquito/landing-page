import { LitElement, html, css } from "lit-element";

class YellowFillet extends LitElement {
  static get styles () {
    return css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
      }

      .container {
        width: 100%;
        height: 100%;
      }

      .container .fillet {
        width: 100%;
        height: 50%;
        border-bottom: solid 0.125rem #ffec02;
        margin: 0 0 0.625rem 0;
      }

      .container a {
        font-family: 'Monument Extended';
        text-decoration: none;
        color: #ffec02;
      }

      @media screen and (max-width: 768px) {
        :host {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .container {
          width: 100%;
          height: auto;
        }

        .container .fillet {
          width: 100%;
          height: 100%;
          border-bottom: solid 0.125rem #ffec02;
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

  render () {
    return html`
      <div class = "container">
        <div class= "fillet"> </div>
        <a href="https://harhuymag.com/suscripcion"> Suscríbete </a>
      </div>`;
  }
}

customElements.define("yellow-fillet", YellowFillet);
