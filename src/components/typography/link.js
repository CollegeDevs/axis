import React from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from '@emotion/core'

const renderLink = ({ css, theme, ...rest }) => {
	const { children, external, size, to, type, ...restProps } = rest

	const className = css({
		...theme.typography.primary,

		color: theme.colors.link[type],
		fontSize: theme.fontSize[size],
		':hover': {
			textDecoration: `underline`,
		}
  })

  if (typeof children === 'function')
    return children({ className, css, theme })

  return (<a href={to} className={className} target={external ? '_blank' : undefined}>{children}</a>)
}

const Link = ({ ...rest }) => (
  <ClassNames>
    {({ css, theme }) => renderLink(({ css, theme, ...rest }))}
  </ClassNames>
)

Link.propTypes = {
  external: PropTypes.bool,
  to: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
}

Link.defaultProps = {
  external: false,
  to: undefined,
  size: 'md',
  type: 'primary',
}

export default Link
