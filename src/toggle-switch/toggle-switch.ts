import { ToggleSwitchBase } from "./toggle-switch-base";
import { customElement, html } from 'lit-element';
import { template } from './toggle-switch.html';

@customElement(ToggleSwitch.is)
export class ToggleSwitch extends ToggleSwitchBase {

  protected render() {
    return template({
      html,
      values: { currentInstance: this },
    });
  }

  public emitToggleEvent() {
    this.dispatchEvent(this.toggled);
  }
}
