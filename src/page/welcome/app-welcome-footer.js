import { LitElement, html, css } from 'lit-element'

class AppWelcomeFooter extends LitElement {
  render () {
    return html`
      <footer class="footer">
        <div class="container">
          <div class="footer-main">
            <h4>链接</h4>
            <a href="https://github.com/a7270102/mqElement" target="_blank" class="footer-main-link">代码仓库</a>
            <a href="" target="_blank" class="footer-main-link">更新日志</a>
            <a href="" target="_blank" class="footer-main-link">常见问题</a>
          </div>
        </div>
      </footer>
    `
  }

  static get styles () {
    return css`
      :host {
        display: block;
      }
      .footer {
        background-color: #f7fbfd;
        width: 100%;
        padding: 40px 150px;
        margin-top: -340px;
        box-sizing: border-box;
        height: 340px;
      }
      .container {
        box-sizing: border-box;
        width: auto;
      }
      .footer-main {
        font-size: 0;
        display: inline-block;
        vertical-align: top;
        margin-right: 110px;
      }
      .footer-main h4 {
        font-size: 18px;
        color: #333;
        line-height: 1;
        margin: 0 0 15px;
      }
      .footer-main-link {
        display: block;
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #666;
      }
    `
  }
}
customElements.define('app-welcome-footer', AppWelcomeFooter)
