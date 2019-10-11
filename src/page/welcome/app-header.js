import {LitElement, html, css, unsafeCSS } from 'lit-element'

class AppHeader extends LitElement {

  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

  /**
   * 路由跳转
   * @private
   */
  _routeToHandler (event) {
    let target = event.target
    let router = target.getAttribute('data-name')
    this.dispatchEvent('routeTo', router)
  }

  render () {
    return html`
      <header>
        <div class="container">
          <h1 class="icon">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0NnB4IiBoZWlnaHQ9IjM4cHgiIHZpZXdCb3g9IjAgMCAxNDYgMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQwICgzMzc2MikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGUgQ29weTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ2Mi4yLjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLpppbpobUt6buY6K6k5pWI5p6cLWNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwLjAwMDAwMCwgLTE5LjAwMDAwMCkiIGZpbGw9IiM0MDlFRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IEMyMTIuMTM1NDQxLDQ1LjE1NzgwNzcgMjEyLjQyMDIzNyw0NS4xNTA1MTA1IDIxMi45NjA5MzcsNDUuMTU3ODA3NyBDMjEzLjUwMTYzNyw0NS4xNjUxMDQ5IDIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTMuNjQ4ODUxLDQ1LjU3MDg1NTYgQzIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTQuNzMzODI4LDQ3LjU2NjU2NTcgMjE1LjAyNDY3Nyw0OC4wNDkxNDM0I"/>
          </h1>
          <ul class="nav" @click="${this._routeToHandler}">
            <li data-name="guide" class="nav-item">指南</li>
            <li data-name="component" class="nav-item">组件</li>
            <li data-name="other" class="nav-item">其他</li>
          </ul>
        </div>
      </header>
    `
  }

  /**
   * 定义样式
   */
  static get styles () {
    return css`
      .container {
        h1.icon {
          float: left;
          font-size: 32px;
          font-weight: 400;
          margin: 0;
        }
        ul.nav {
          float: right;
          height: 100%;
          line-height: 80px;
          background: transparent;
          padding: 0;
          margin: 0;
          .nav-item {
            margin: 0;
            float: left;
            list-style: none;
            position: relative;
            cursor: pointer;
          }
        }
      }
    `
  }
}
