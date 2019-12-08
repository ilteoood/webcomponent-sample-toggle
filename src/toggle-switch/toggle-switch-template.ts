import { html } from "lit-html";
import { customElement } from 'lit-element';
import { ToggleSwitch } from "./toggle-switch";

@customElement(ToggleSwitchTemplate.is)
export class ToggleSwitchTemplate extends ToggleSwitch {

  render() {
    return html`
          <span class="off">${this.leftLabel}</span>
          <label class="switch">
            <input type="checkbox" ?checked=${this.currentState} @click=${this.emitToggleEvent}>
            <span class="slider round"></span>
          </label>
          <span class="on">${this.rightLabel}</span>
        `;
  }
}