import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { getPreceddingStyle } from '../styles/mixins'

const getActiveStates = (states, kind) => {
  const { normal, active, focus, hover } = states
  const activeState = typeof active !== 'undefined' ? { '&:active': active[kind] } : {}
  const focusState = typeof focus !== 'undefined' ? { '&:focus': focus[kind] } : {}
  const hoverState = typeof hover !== 'undefined' ? { '&:hover': hover[kind] } : {}

  return ({
    ...normal[kind],
    ...activeState,
    ...focusState,
    ...hoverState
  })
}

const Button = ({ children, ...rest }) => {
  const { kind, size, width, ...restProps } = rest

  const StyledButton = styled.button(({ theme }) => {
    const { buttons, fontSize, variables } = theme
    const typography = theme.typography.button

    return ({
      ...typography,

      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      borderRadius: `${variables.borderRadius}rem`,
      borderWidth: `${variables.borderWidth}px`,
      padding: `${0.5 * theme.variables.gutter}rem  ${0.75 * theme.variables.gutter}rem`,
      width: width && width,
      verticalAlign: 'middle',
      transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      ...getPreceddingStyle(size, fontSize, typography, 'fontSize'),
      ...getActiveStates(buttons, kind)
    })
  })

  return (
    <StyledButton {...restProps}>{children}</StyledButton>
  )
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'error', 'warning', 'success']),
  size: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Button.defaultProps = {
  kind: 'primary',
  size: undefined,
  width: undefined
}

export default Button