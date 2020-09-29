import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const applyStyles = (theme, htmlTag, props) => {
  const { fontSize, fontWeight, lineHeight, letterSpacing } = theme
  const { density, size, spacing, weight } = props
  const mappedSize = size ? fontSize[size] :  Object.values(fontSize)[htmlTag[1] - 1]

  return ({
    ...theme.typography.primaryHeadline,

    lineHeight: density && lineHeight[density],
    fontSize: mappedSize,
    fontWeight: weight && fontWeight[weight],
    letterSpacing: spacing && letterSpacing[spacing]
  })
}

const Heading = ({ children, as, ...rest }) => {
  const StyledHeadline = styled[as](({ theme }) => applyStyles(theme, as, rest))

  return <StyledHeadline>{children}</StyledHeadline>
}

Heading.propTypes = {
  as: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]),
  density: PropTypes.string,
  fontSize: PropTypes.string,
  spacing: PropTypes.string,
  size: PropTypes.string,
  spacing: PropTypes.string,
  weight: PropTypes.string,
}

Heading.defaultProps = {
  as: 'h1',
  density: undefined,
  letterSpacing: undefined,
  lineHeight: undefined,
  size: undefined,
  spacing: undefined,
  weight: 'bold'
}

export default Heading
