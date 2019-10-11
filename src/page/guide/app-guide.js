import { LitElement, html } from 'lit-element'

class AppGuide extends LitElement {
  render () {
    return html`
      <div>guide页面，敬请期待</div>
    `
  }
}

customElements.define('app-guide', AppGuide)
