import React from 'react'

export default class Link extends React.Component {

  constructor(props) {
    super(props)
    this.isHover = false
    this.link = React.createRef()
  }

  _validateLink =()=> {
    const str = "demo";
    /*eslint-disable */
    const pattern = new RegExp('^(https?:\/\/)?' + // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
    '((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
    '(\?[&a-z\d%_.~+=-]*)?' + // query string
    '(\#[-a-z\d_]*)?$', 'i') // fragment locater
    if (!pattern.test(str)) {
      alert("Please enter a valid URL.")
      return false
    } else {
      return true
    }
    /*eslint-enable */
  }

  _checkProtocol =()=> {
    return console.log("xcvd")
  }

  _showPopLinkOver =(e)=> {
    if (!this.data.showPopLinkOver) {
      return
    }
    return this.data.showPopLinkOver(this.link.current)
  }

  _hidePopLinkOver =(e)=> {
    if (!this.data.hidePopLinkOver) {
      return
    }
    return this.data.hidePopLinkOver()
  }

  render() {
    this.data = this.props.contentState.getEntity(this.props.entityKey).getData()
    //Entity.get(this.props.entityKey).getData()

    return (
      <a
        ref={this.link}
        href={ this.data.url }
        className="markup--anchor"
        onMouseOver={ this._showPopLinkOver }
        onMouseOut={ this._hidePopLinkOver }
      >
        { this.props.children }
      </a>
    )
  }
}

