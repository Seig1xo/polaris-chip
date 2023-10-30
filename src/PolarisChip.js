import { LitElement, html, css } from 'lit';
import "./date-chip.js";

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      imageSrc: { type: String },
      header: { type: String },
      desc: { type: String },
      date: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      .cardcontainer {
        display: flex;
        flex-direction: column;
        float: left;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin-right: 10px;
        line-height: 24px;
      }

      a.chip {
        position: relative;
        display: block;
        cursor: pointer;
      }

      a.chip::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 64, 124, 0.35); 
        opacity: 0; 
      }

      a.chip:hover::before {
        opacity: 1; 
      }

      a.chip img {
        max-width: 300px;
        height: auto;
      }

      a.chip {
        font-weight: bold;
        text-decoration: none;
        padding: 0px 0px;
        font-size: 16px;
      }

      .imagecontainer {
        display: block;
        flex-wrap: wrap;
        justify-content: center; 
        align-items: center; 
      }

      @media (max-width: 768px) {
        .cardcontainer {
          flex-direction: column;
        }
      }

      .headercontainer {
        display: block;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 20.8px;
        font-weight: 400;
        text-transform: capitalize;
      }

      .cardheader {
        color: rgb(0, 95, 169);
        text-decoration-line: none;
        text-decoration-style: solid;
      }

      .descriptioncontainer {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .description {
        font-size: 19.2px;
        font-weight: 100;
        color: black;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = '';
    this.imageSrc = '';
    this.header = '';
    this.desc = '';
    this.date = '';
  }

  render() {
    return html`
    <div class="cardcontainer">
    <!-- image container -->
      <div class="imagecontainer">
        <a class="chip" href="${this.link}" target="_blank">
          <img src="${this.imageSrc}" alt="${this.name}">
          <slot>${this.name}</slot>
        </a>
      </div>
      <!-- date chip + heading -->
      </div class="headercontainer">
        <date-chip date="${this.date}"></date-chip>
        <h3>
          <a class="cardheader" href="${this.link}" target="_blank">
            <slot>${this.header}</slot>
          </a> 
        </h3>
      </div>
      <!-- desc -->
      <div class="descriptioncontainer">
        <p class="description">
          <slot>${this.desc}</slot>
        </p>
      </div>
    </div>
    `;
  }
}