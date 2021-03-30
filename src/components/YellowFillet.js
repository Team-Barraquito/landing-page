import { LitElement, html, css } from "lit-element";

class YellowFillet extends LitElement {
  static get styles () {
    return css`
      .container {
        width: 100%;
        heigth: 10px;
      }

      .container .thread {
        width: 100%;
        height: 100%;
        border-bottom: solid 2px yellow;
        margin: 0 0 10px 0;
      }

      .container a {
        font-family: 'Monument Extended';
        text-decoration: none;
        color: yellow;
      }
`;
  }

  render () {
    return html`
        <div class = "container">
            <div class = "thread"> </div>
            <a href="#"> Suscríbete </a>
        </div>
        `;
  }
}
customElements.define("yellow-fillet", YellowFillet);
