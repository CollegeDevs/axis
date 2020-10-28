import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { getDefaultStyle, getPreceddingStyle } from '../styles/mixins'

const Button = ({ children, ...rest }) => {
  const { kind, size, width, ...restProps } = rest

  const StyledButton = styled.button(({ theme }) => {
    const { states, colors, fontSize, transition, variables } = theme
    const typography = theme.typography.button

    return ({
      ...typography,

      background: colors[kind],
      borderColor: colors[kind],
      borderRadius: `${variables.borderRadius}rem`,
      borderWidth: `${variables.borderWidth}px`,
      color: colors.white,
      cursor: 'pointer',
      display: 'inline-block',
      padding: `${0.5 * theme.variables.gutter}rem  ${0.75 * theme.variables.gutter}rem`,
      textAlign: 'center',
      verticalAlign: 'middle',
      width: width && width,
      transition: getDefaultStyle(transition.button, kind),
      ...getPreceddingStyle(size, fontSize, typography, 'fontSize'),
      ...states.button[kind]
    })
  })

  return (
    <StyledButton {...restProps}>{children}</StyledButton>
  )
}

Button.propTypes = {
  kind: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Button.defaultProps = {
  kind: 'primary',
  size: undefined,
  width: undefined
}

export default Button