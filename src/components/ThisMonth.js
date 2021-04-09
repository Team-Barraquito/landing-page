import { LitElement, html, css } from "lit-element";

class ThisMonth extends LitElement {
  static get styles () {
    return css`
    .this-month-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .this-month-png {
      width: 1000px;
      height: 100%;
      background-image: url("/images/this-month-desktop.png");
      background-repeat: no-repeat;
      background-size: contain;
    }

    @media screen and (max-width: 768px) {
      .this-month-png {
        width: 793px;
        height: 438px;
        background-image: url("/images/this-month-mobile.png");
        background-repeat: no-repeat;
        background-size: contain;
      }

      .this-month-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: hidden;
      }
    }
`;
  }

  render () {
    return html`
    <div class="this-month-container">
      <div class="this-month-png"></div>
    </div>
      `;
  }
}
customElements.define("this-month", ThisMonth);
