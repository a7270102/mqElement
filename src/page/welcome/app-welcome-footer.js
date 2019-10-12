import { LitElement, html } from 'lit-element'

class AppWelcomeFooter extends LitElement {
  render () {
    return html`
      <span>welcome footer</span>
    `
  }
}
customElements.define('app-welcome-footer', AppWelcomeFooter)
