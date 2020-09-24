import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const applyStyles = (theme, htmlTag, props) => {
  const { fontSize, fontWeight, lineHeight } = theme
  const { weight, density, size } = props
  const mappedSize = size ? fontSize[size] :  Object.values(fontSize)[htmlTag[1] - 1]

  return ({
    ...theme.typography.primaryHeadline,

    fontSize: mappedSize,
    fontWeight: fontWeight[weight],
    lineHeight: lineHeight[density]
  })
}

const Heading = ({ children, as, ...rest }) => {
  const StyledHeadline = styled[as](({ theme }) => applyStyles(theme, as, rest))

  return <StyledHeadline>{children}</StyledHeadline>
}

Heading.propTypes = {
  as: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]),
  // density: PropTypes.oneOf(Object.keys(lineHeight)),
  // size: PropTypes.oneOf(Object.keys(fontSizes)),
  // weight: PropTypes.oneOf(Object.keys(fontWeight))
}

Heading.defaultProps = {
  as: 'h1',
  density: 'normal',
  size: undefined,
  weight: 'bold'
}

export default Heading
