import { LitElement, html } from 'lit-element'

class AppDefault extends LitElement {
  render () {
    return html`
      <div>default页面，敬请期待</div>
    `
  }
}

customElements.define('app-default', AppDefault)
