import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { getPreceddingStyle } from '../../styles/mixins' // Map the props

const textAlign = {
  left: 'left',
  right: 'right',
  center: 'center'
}

const applyStyles = (theme, props) => {
  const { fontSize, fontWeight, lineHeight, letterSpacing } = theme
  const { align, density, size, spacing, type, weight } = props
  const typography = theme.typography[type]

  return ({
    ...typography,

    ...getPreceddingStyle(size, fontSize, typography, 'fontSize'),
    ...getPreceddingStyle(weight, fontWeight, typography, 'fontWeight'),
    ...getPreceddingStyle(spacing, letterSpacing, typography, 'letterSpacing'),
    ...getPreceddingStyle(density, lineHeight, typography, 'lineHeight'),
    ...getPreceddingStyle(align, textAlign, typography, 'textAlign')
  })
}

const Heading = ({ children, as, ...rest }) => {
  const { density, size, spacing, weight, ...restProps } = rest
  const StyledHeadline = styled[as](({ theme }) => applyStyles(theme, rest))

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
  type: PropTypes.string,
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
  type: 'heading',
  weight: 'bold'
}

export default Heading
