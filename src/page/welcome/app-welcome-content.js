import { LitElement, html } from 'lit-element'

class AppWelcomeContent extends LitElement {
  render() {
    return html`
      <span>内容区域</span>
    `
  }
}

customElements.define('app-welcome-content', AppWelcomeContent)
