import { LitElement, html } from 'lit-element'
import './page/welcome/app-welcome.js'
import './page/components/app-components.js'
import './page/default/app-default.js'
import './page/guide/app-guide.js'
import './page/other/app-other.js'
class Main extends LitElement {

  constructor () {
    super()
    this._welcome = html`<app-welcome></app-welcome>`
    this._componets = html`<app-components></app-components>`
    this._guide = html`<app-guide></app-guide>`
    this._other = html`<app-other></app-other>`
    this._default = html`<app-default></app-default>`
    this.projectPages = {
      welcome: this._welcome,
      components: this._componets,
      guide: this._guide,
      other:this._other,
      null: this._default
    }
    this._router = null
  }

  render () {
    return html`
      <div slot="content">
        <p>I‘am ChenMingQi, This is my first custom UI lab!</p>
        <slot name="content">${this.projectPages[this._router]}</slot>
      </div>
    `
  }
}

customElements.define('cyy-app', Main)
