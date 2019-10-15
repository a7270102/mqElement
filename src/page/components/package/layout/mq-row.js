import { LitElement, html, css, unsafeCSS } from 'lit-element'

class MqRow extends LitElement {

  static get  properties () {
    return {
      gutter: {type: Number},
      type: {type: String},
      justify: {type: String},
      align: {type: String},
      tag: {type: String}
    }
  }

  constructor () {
    super()
    this.gutter = 0
    this.tag = 'div'
    this.type = null
    this.justify = 'start'
    this.align = 'top'
  }

  /**
   * 生成计算属性，当属性变更后，需要触发重新render以更新样式
   * @returns {*}
   * @private
   */
  _computedStyle () {
    let isJustify = this.justify !== 'start' ? `is-justify-${this.justify}` : ''
    let isAlign = this.align !== 'top' ? `is-align-${this.align}` : ''
    let isFlex = this.type === 'flex' ? 'mq-row--flex' : ''
    let hasGutter = this.gutter ? 'has-gutter' : ''
    return [isJustify, isAlign, isFlex, hasGutter].reduce((sum, item) => {
      if (item !== '') {
        sum.push(item)
      }
      return sum
    }, ['mq-row'])
  }

  render () {
    let computedStyle = this._computedStyle()
    let tagStart = `<${this.tag} class="${computedStyle}">`
    let tagEnd = `<${this.tag}/>`
    return html`
      ${tagStart}
        <slot></slot>
      ${tagEnd}
    `
  }

  static get styles () {
    let marginLeft = `-${this.gutter / 2}px`
    let marginRight =  marginLeft
    return css `
      .mp-row {
        position: relative;
        box-sizing: border-box;
      }
      
      .has-gutter {
        margin-left: ${unsafeCSS(marginLeft)};
        margin-right: ${unsafeCSS(marginRight)};
      }
      
      .mq-row--flex.is-justify-center {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .mq-row--flex.is-justify-end {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end
      }
      
      .mq-row--flex.is-justify-space-between {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
      }
      
      .mq-row--flex.is-justify-space-around {
        -ms-flex-pack: distribute;
        justify-content: space-around
      }
      
      .mq-row--flex.is-align-middle {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
      }
      
      .mq-row--flex.is-align-bottom {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end
      }
      
      .mq-row {
        -webkit-box-sizing: border-box;
         box-sizing: border-box
      }
      
      .mq-row::after, .mq-row::before {
        display: table
      }
      
      .mq-row::after {
        clear: both
      }
      
      .el-row--flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
      }
    `
  }
}

customElements.define('ma-row', MqRow)
