import React from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from '@emotion/core'

import { getDefaultState, getPreceddingStyle } from '../../styles/mixins'

const renderLink = ({ css, theme, ...rest }) => {
  const { children, color, external, size, to, type, weight, ...restProps } = rest
  const { colors, fontSize, fontWeight, states } = theme
  const typography = theme.typography.primary


  const className = css({
    ...typography,

    ...getPreceddingStyle(color, colors, colors, 'color'),
    ...getPreceddingStyle(size, fontSize, typography, 'fontSize'),
    ...getPreceddingStyle(weight, fontWeight, typography, 'fontWeight'),
    ...getDefaultState(states.link, type)
  })

  if (typeof children === 'function') return children({ className, css, theme })

  return (
    <a
      href={to}
      className={className}
      target={external ? '_blank' : undefined}
      {...restProps}
    >
      {children}
    </a>
  )
}

const Link = ({ ...rest }) => (
  <ClassNames>
    {({ css, theme }) => renderLink({ css, theme, ...rest })}
  </ClassNames>
)

Link.propTypes = {
  color: PropTypes.string,
  external: PropTypes.bool,
  to: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string
}

Link.defaultProps = {
  color: undefined,
  external: false,
  to: undefined,
  size: undefined,
  type: 'primary',
  weight: undefined
}

export default Link
