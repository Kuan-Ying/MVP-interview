import React from 'react';
import styled from 'styled-components'
import ToolTip from './ToolTip'
import StyledLink from './StyledLink'

const AppContainer = styled.div`
  margin-top: 80px;
  float: left;
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <ToolTip value="Tooltip text!"><StyledLink href="#">This is a Link</StyledLink></ToolTip>
        <ToolTip value="Tooltip text!"><a href="#">This is a default Link</a></ToolTip>
      </AppContainer>
    );
  }
}

export default App;
