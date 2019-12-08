import { customElement, html, LitElement, css, property } from 'lit-element';

@customElement(ToggleSwitch.is)
export class ToggleSwitch extends LitElement {

  @property({type: String, attribute: 'left-label'})
  private leftLabel = '';

  @property({type: String, attribute: 'right-label'})
  private rightLabel = '';

  @property({type: String, attribute: 'current-state', reflect: true})
  private currentState = false;

  private toggled: CustomEvent = new CustomEvent('toggleSwitchToggled', { composed: true, cancelable: true, bubbles: true });

  static get is() {
    return 'toggle-switch';
  }

  static get styles() {
    return css`
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #2196F3;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }

    .off {
      color: red;
    }

    .on {
      color: green;
    }
    `;
  }

  protected render() {
    return html`
      <span class="off">${this.leftLabel}</span>
      <label class="switch">
        <input type="checkbox" ?checked=${this.currentState} @click=${this.emitToggleEvent}>
        <span class="slider round"></span>
      </label>
      <span class="on">${this.rightLabel}</span>
    `;
  }

  private emitToggleEvent() {
    this.dispatchEvent(this.toggled);
  }
}
