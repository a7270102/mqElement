import { LitElement, html } from 'lit-element'
import './app-welcome-content'
import './app-welcome-footer'
class AppWelcome extends LitElement {

  render () {
    return html`
      <div class="page-welcome">
        <app-welcome-content></app-welcome-content>
        <app-welcome-footer></app-welcome-footer>
      </div>
    `
  }
}

customElements.define('app-welcome', AppWelcome)
