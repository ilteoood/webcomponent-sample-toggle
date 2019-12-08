import { customElement, html, LitElement, css, property } from 'lit-element';
import { ToggleSwitchTemplate } from './toggle-switch-template';
import { ToggleSwitchStyle } from './toggle-switch-style';

@customElement(ToggleSwitch.is)
export class ToggleSwitch extends LitElement {

  @property({ type: String, attribute: 'left-label' })
  public leftLabel = '';

  @property({ type: String, attribute: 'right-label' })
  public rightLabel = '';

  @property({ type: String, attribute: 'current-state', reflect: true })
  public currentState = false;

  public toggled: CustomEvent = new CustomEvent('toggleSwitchToggled', { composed: true, cancelable: true, bubbles: true });

  static get is() {
    return 'toggle-switch';
  }

  static get styles() {
    return ToggleSwitchStyle.styles();
  }

  protected render() {
    return new ToggleSwitchTemplate(this).render();
  }

  public emitToggleEvent() {
    this.dispatchEvent(this.toggled);
  }
}
