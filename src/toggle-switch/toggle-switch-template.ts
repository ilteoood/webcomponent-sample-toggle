import { html } from "lit-html";
import { LitElement, property } from "lit-element";
import { ToggleSwitch } from "./toggle-switch";

export class ToggleSwitchTemplate {

    private toggleSwitch: ToggleSwitch;

    constructor(toggleSwitch: ToggleSwitch) {
        this.toggleSwitch = toggleSwitch;
    }

    render() {
        return html`
          <span class="off">${this.toggleSwitch.leftLabel}</span>
          <label class="switch">
            <input type="checkbox" ?checked=${this.toggleSwitch.currentState} @click=${this.toggleSwitch.emitToggleEvent}>
            <span class="slider round"></span>
          </label>
          <span class="on">${this.toggleSwitch.rightLabel}</span>
        `;
    }
}