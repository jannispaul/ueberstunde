import React from "react"

class Form extends React.Component {
  state = { contentHeight: 100 }

  handleResize = () => {
    const { body, documentElement } = this.container.contentWindow.document
    const contentHeight = Math.max(
      body.clientHeight,
      body.offsetHeight,
      body.scrollHeight,
      documentElement.clientHeight,
      documentElement.offsetHeight,
      documentElement.scrollHeight
    )
    if (contentHeight !== this.state.contentHeight)
      this.setState({ contentHeight })
  }

  onLoad = () => {
    this.container.contentWindow.addEventListener("resize", this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    this.container.contentWindow.removeEventListener(
      "resize",
      this.handleResize
    )
  }

  render() {
    const { contentHeight } = this.state
    return (
      <iframe
        frameBorder="0"
        onLoad={this.onLoad}
        // ref={container => {
        //   this.container = container
        // }}
        scrolling="no"
        src={this.props.src}
        style={{ width: "100%", height: `${contentHeight}px` }}
        title="Form"
      />
    )
  }
}

export default Form
