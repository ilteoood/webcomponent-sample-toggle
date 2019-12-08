import { LitElement, property } from 'lit-element';

export class ToggleSwitchBase extends LitElement {

    @property({ type: String, attribute: 'left-label' })
    protected leftLabel = '';

    @property({ type: String, attribute: 'right-label' })
    protected rightLabel = '';

    @property({ type: String, attribute: 'current-state', reflect: true })
    protected currentState = false;

    protected toggled: CustomEvent = new CustomEvent('toggleSwitchToggled', { composed: true, cancelable: true, bubbles: true });

    static get is() {
        return 'toggle-switch';
    }
}