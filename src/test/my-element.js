import {LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      message: String,
      list: Array,
      isWinner: Boolean,
      placeholder: String,
      isChecked: Boolean
    }
  }
  static get styles () {
    const red = css`red`
    const blue = 'blue'
    return [
      css`
      :host {
        display: block;
        color: green;
      }
      :host([hidden]) {
        display: none; 
      }
      .first-p {
        color: ${red};
      }
      .second-p {
        color: ${unsafeCSS(blue)};
      }
      ::slotted(*) {}
      ::slotted(p)
      p ::slotted(*) {}
      `
    ]
  }

  constructor () {
    super()
    this.message = 'hello world, cyy'
    this.list = [{name: 'cyy', age: 19}, {name: 'lucy', age: 18}]
    this.isWinner = false
    this.isChecked = true
    this.placeholder = '请输入看看'
    this.addEventListener('stuff-loaded', e => {this.message = e.detail})
    this.loadStuff()
  }

  loadStuff () {
    setInterval(() => {
      let loaded = new CustomEvent('stuff-loaded', {
        detail: 'Loading complete.'
      });
      this.dispatchEvent(loaded);
    }, 3000);
  }

  clickHandler (e) {
    console.log('点击事件', e.target)
    window.alert('点击事件')
  }

  render () {
    return html`
    <slot name="title"></slot>
    <p class="first-p">${this.message}</p>
    <ul>${this.list.map(i => html`<li>${i.name}---${i.age}</li>`)}</ul>
    <p class="second-p">${this.isWinner ? html`<span>Cyy</span>` : html`<span>Lucy</span>`}</p>
    <p class="third-p"><span>${this.isWinner ? 'Lucy' : 'Cyy'}</span></p>
    <input placeholder="${this.placeholder}" />
    <p><input type="checkbox" ?checked="${this.isChecked}">Cyy is a handsome man!</input></p>
    <p><input type="checkbox" .value="${this.isChecked}">Cyy also is a smart man! </input></p>
    <p><button @click="${this.clickHandler}">pei?</button></p>
    <style>
      .third-p {
         color: grey;
      }
    </style>
    `
  }
}

customElements.define('my-element', MyElement)