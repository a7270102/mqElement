import { LitElement, html } from 'lit-element'

class AppComponents extends LitElement {
  render () {
    return html`
      <div>components页面，敬请期待</div>
    `
  }
}

customElements.define('app-components', AppComponents)
