import * as React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`{
  width: 100%;
  height: 100%;
  background: url(${props => props.props});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40% 20%;
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    background-size: cover;
    background-position: inherit;
  }
}
`
class GlitchImage extends React.Component {
  render () {
    return (
      <ImageWrapper props={this.props.url} />
    )
  }
}

export default GlitchImage
