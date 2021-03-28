import { LitElement, html, css } from "lit-element";

class Thread extends LitElement{
    static get styles(){
        return css`
            .container {
                width: 500px;
                heigth: 10px;
            }
            .container .thread {
                width: 100%;
                height: 100%;
                border-bottom: solid 5px yellow;
            }
            .container a {
                font-family: 'Monument Extended';
                text-decoration: none;
                color: yellow; 
            }`
    }
    render(){
        return html`
        <div class = "container">
            <div class = "thread"> </div>
            <a href="#"> Suscríbete </a> 
        </div>
        `
    }
}
customElements.define('yellow-thread', Thread);