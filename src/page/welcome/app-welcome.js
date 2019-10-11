import { LitElement, html } from 'lit-element'

class AppWelcome extends LitElement {
  render () {
    return html`
      <div>welcome页面，敬请期待</div>
    `
  }
}

customElements.define('app-welcome', AppWelcome)
