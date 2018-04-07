import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  background-color: rgb(249, 250, 150);
  color: rgb(177,152,72);
  display: inline-block;
  text-align: center;
  position: absolute;
  border: 5px solid rgb(247, 233, 119);
  box-shadow: 0 0 0 5px rgb(247, 233, 119);
  border-radius: 2px;
  line-height: 1.5;
  z-index: 99;
  padding: 10px 30px;
  top: -110%;
  left: 20px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    left: 60px;
    border-left: 10px solid transparent ;
    border-right: 10px solid transparent;
    border-top: 15px solid rgb(247, 233, 119);
  }
`

const ToolTipText = props => <Text>{props.children}</Text> 

export default ToolTipText 