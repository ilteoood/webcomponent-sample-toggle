import { ToggleSwitchStyle } from './toggle-switch-style';

export class ToggleSwitch extends ToggleSwitchStyle {

  public emitToggleEvent() {
    this.dispatchEvent(this.toggled);
  }
}