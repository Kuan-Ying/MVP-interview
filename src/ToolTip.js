import React from 'react'
import ToolTipText from './ToolTipText'
import styled from 'styled-components'

const ToolTipContainer = styled.div`
  box-sizing: border-box;
  background: rgb(249,249,249);
  border: white solid 2px;
  display: block;
  padding: 20px 40px;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
`

class ToolTip extends React.Component{
  state = {
    display: false
  }

  showMessage() {
    return this.state.display? 
      <ToolTipText>{this.props.value}</ToolTipText>
      : null
  }

  hoverHandler = shouldDisplay  => {
    this.setState({display:shouldDisplay})
  }

  renderChildren() {
    return React.Children.map(this.props.children, 
      child => React.cloneElement(child, 
        {
          'onMouseOut':() => this.hoverHandler(false),
          'onMouseOver':() => this.hoverHandler(true)
        })
    )
  }

  render() {
    return (
      <ToolTipContainer>
        {this.showMessage()}
        {this.renderChildren()}
      </ToolTipContainer>
    )
  }
} 
  
export default ToolTip