import { LitElement, html, css } from 'lit';

export class DateChip extends LitElement {
  static get properties() {
    return {
      date: { type: String },
      month: { type: String },
      day: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        display: flex;
        flex-direction: column;
        float: left;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin-right: 10px;
        line-height: 24px;
        text-align: center;
      }
      .month {
        background-color: #1E407C;
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        color: white;
        font-size: 12.8px;
        font-weight: 700;
        line-height: 23.04px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        text-transform: uppercase;
      }
      .day {
        background-color: white;
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        color: #444444;
        font-size: 18px;
        font-weight: 900;
        line-height: 27px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    `;
  }

  constructor() {
    super();
    this.date = '01/01/2001'
    this.month = 'Jan';
    this.day = 1;
  }

  dateToMonth() {
    var inputDate = new Date(this.date);
    this.month = inputDate.toLocaleDateString('en-us', { month:"short" });
  }

  dateToDay() {
    var inputDate = new Date(this.date);
    this.day = inputDate.toLocaleDateString('en-us', { day:"numeric" });
  }

  render() {
    this.dateToMonth();
    this.dateToDay();
    return html`
    <div class="container">
      <span class="month">${this.month}</span>
      <span class="day">${this.day}</span>
    </div>
    `;
  }
}

customElements.define('date-chip', DateChip);