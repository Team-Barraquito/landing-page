import { LitElement, html, css } from "lit-element";

class YellowFillet extends LitElement {
  static get styles () {
    return css`
      .container {
        width: 100%;
        height: 0.625rem;
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
      }`;
  }

  render () {
    return html`
      <div class = "container">
        <div class="fillet"> </div>
        <a href="#"> Suscríbete </a>
      </div>`;
  }
}
customElements.define("yellow-fillet", YellowFillet);
