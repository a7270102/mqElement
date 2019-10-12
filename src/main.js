import { LitElement, html } from 'lit-element'
import './page/welcome/app-welcome.js'
import './page/components/app-components.js'
import './page/default/app-default.js'
import './page/guide/app-guide.js'
import './page/other/app-other.js'
class Main extends LitElement {

  constructor () {
    super()
    this._welcome = html`<app-welcome @routeTo="${this._routeTo}"></app-welcome>`
    this._componets = html`<app-components></app-components>`
    this._guide = html`<app-guide></app-guide>`
    this._other = html`<app-other></app-other>`
    // this._default = html`<app-default></app-default>`
    this.projectPages = {
      null: this._welcome,
      components: this._componets,
      guide: this._guide,
      other:this._other,
      // null: this._default
    }
    this._router = null
  }

  /**
   * 切换路由方法
   * @private
   */
  _routeTo (e) {
    e.stopPropagation()
    let router = e.detail.router
    console.log('我获取到路由更新:', router)
    this._router = router
    // 更新视图
    this.requestUpdate()
  }

  render () {
    return html`
      <div class="app-main">
        <div>${this.projectPages[this._router]}</div>
      </div>
    `
  }
}

customElements.define('cyy-app', Main)
