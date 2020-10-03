import React from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from '@emotion/core'

const getPreceddingStyle = (key, object, theme, styleKey) => {
	if (key !== undefined)
		return { [styleKey]: object[key] }
	else if ({}.propertyIsEnumerable.call(theme, key))
		return { [styleKey]: theme[key] }
	else
		return undefined
}

const renderLink = ({ css, theme, ...rest }) => {
  const { children, external, size, to, type, ...restProps } = rest
  const { colors, fontSize } = theme
  const typography = theme.typography.primary

  const className = css({
    ...typography,

    ...getPreceddingStyle(size, fontSize, typography, 'fontSize'),
    ...getPreceddingStyle(type, colors.link, colors.link, 'color'),
    ':hover': {
      textDecoration: `underline`
    }
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
  external: PropTypes.bool,
  to: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
}

Link.defaultProps = {
  external: false,
  to: undefined,
  size: undefined,
  type: 'primary'
}

export default Link
