import { LitElement, html } from 'lit-element';
import './test/my-element.js'

class Main extends LitElement {

  render () {
    return html`
      <div>
      <p>hello World! Cyy Nb, next is a custom element</p>
      <my-element>
        <p slot="title">我是slot插槽内容</p>
      </my-element>
      </div>
    `
  }
}

customElements.define('cyy-app', Main)