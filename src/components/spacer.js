import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Spacer = ({ height, width, ...rest }) => {
  const StyledDiv = styled.div`
    height: ${height}px;
    width: ${width}px;
  `

  return (<StyledDiv {...rest} />)
}

Spacer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Spacer.defaultProps = {
  height: 10,
  width: 0
}

export default Spacer