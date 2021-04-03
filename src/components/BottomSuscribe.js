import { LitElement, html, css } from "lit-element";

class BottomSuscribe extends LitElement {
  static get styles () {
    return css`

    :host {
      width: 100%;
      height: 100%;
    }

    .container {
      border: 1px solid red;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
    }

    .container .suscribe {
      font-family: "Monument Extended";
      font-size: 5.25rem;
      text-align: center;
      color: #000;
      margin: 0;
      position: absolute;
      z-index: 2;
    }

    .container .fillet {
      width: 90%;
      height: 10%;
      background-color: #fff;
      position: absolute;
      z-index: 1;
    }

    @media screen and (max-width: 375px) {
      .container .suscribe {
        font-family: "Monument Extended";
        font-size: 2.25rem;
        text-align: center;
        color: #000;
        margin: 0;
        position: absolute;
        z-index: 2;
      }

      .container .fillet {
        width: 90%;
        height: 10%;
        background-color: #fff;
        position: absolute;
        z-index: 1;
      }
    }

`;
  }

  render () {
    return html`
      <div class = "container">
        <p class="suscribe">Suscríbete</p>
        <div class="fillet"></div>
      </div>`;
  }
}
customElements.define("bottom-suscribe", BottomSuscribe);
