import { LitElement, html } from 'lit-element'

class AppOther extends LitElement {
  render () {
    return html`
      <div>other页面，敬请期待</div>
    `
  }
}

customElements.define('app-other', AppOther)
