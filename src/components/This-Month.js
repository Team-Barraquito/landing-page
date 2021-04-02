import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
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
      background-image: url("../assets/images/this-month-desktop.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }

    @media screen and (max-width: 768px) {
      .this-month-png {
        width: 100%;
        height: 100%;
        background-image: url("../assets/images/this-month-mobile.png");
        background-repeat: no-repeat;
        background-size: 100%;
      }

      .this-month-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    /*
    .this-month-module {
      width: 100%;
      height: 100%;
      display: flex;
    }

    .this-month-fill {
      font-size: 5.375rem;
    }
    .this-month-line {}
    .date {} */
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
customElements.define("this-month", MyElement);
