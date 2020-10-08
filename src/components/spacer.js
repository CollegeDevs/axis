import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Spacer = ({ height, width, ...rest }) => {
  const StyledDiv = styled.div({
    height: height,
    width: width,
  })

  return (<StyledDiv {...rest} />)
}

Spacer.propTypes = {
  height: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
}

Spacer.defaultProps = {
  height: 10,
  width: 0
}

export default Spacer