import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { getPreceddingStyle } from '../../styles/mixins' // Map the props

const textAlign = {
  left: 'left',
  right: 'right',
  center: 'center'
}

const applyStyles = (theme, htmlTag, props) => {
  const { fontSize, fontWeight, lineHeight, letterSpacing } = theme
  const { align, density, size, spacing, weight } = props
  const mappedSize = size ? fontSize[size] :  Object.values(fontSize)[htmlTag[1] - 1]

  return ({
    ...theme.typography.primaryHeadline,

    lineHeight: density && lineHeight[density],
    fontSize: mappedSize,
    fontWeight: weight && fontWeight[weight],
    letterSpacing: spacing && letterSpacing[spacing],
    textAlign: align && textAlign[align]
  })
}

const Heading = ({ children, as, ...rest }) => {
  const { density, size, spacing, weight, ...restProps } = rest
  const StyledHeadline = styled[as](({ theme }) => applyStyles(theme, as, rest))

  return <StyledHeadline {...restProps}>{children}</StyledHeadline>
}

Heading.propTypes = {
  as: PropTypes.oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]),
  align: PropTypes.oneOf(Object.keys(textAlign)),
  density: PropTypes.string,
  fontSize: PropTypes.string,
  spacing: PropTypes.string,
  size: PropTypes.string,
  spacing: PropTypes.string,
  weight: PropTypes.string,
}

Heading.defaultProps = {
  as: 'h1',
  align: undefined,
  density: undefined,
  letterSpacing: undefined,
  lineHeight: undefined,
  size: undefined,
  spacing: undefined,
  weight: 'bold'
}

export default Heading
