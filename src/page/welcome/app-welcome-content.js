import { LitElement, html, css } from 'lit-element'

class AppWelcomeContent extends LitElement {
  render() {
    return html`
      <div class="content">
        <div class="banner">
            <div class="banner-desc">
                <h1>网站快速成型工具</h1>
                <p>MingElementUI，一套为开发者、设计师和产品经理准备的基于 LitElement 1.0 的桌面端组件库</p>
            </div>
        </div>
        <div class="jumbotron">
            <img src="src/static/theme-index-blue.png" alt="">
         </div>
      </div>
    `
  }

  static get styles () {
    return css`
      .content {
        margin-top: -80px;
        padding: 80px 0 340px;
        box-sizing: border-box;
        min-height: 100%;
      }
      .banner {
        text-align: center
      }
      .banner-desc {
        padding-top: 20px
      }
      .jumbotron {
        width: 890px;
        margin: 30px auto;
        position: relative;
      }
      .jumbotron img {
        width: 100%;
      }
    `
  }
}

customElements.define('app-welcome-content', AppWelcomeContent)
