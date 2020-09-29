import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const textAlign = {
  left: 'left',
  right: 'right',
  center: 'center'
}

const Text = props => {
	const { children, align, density, spacing, size, type, weight, ...restProps } = props

	const StyledText = styled.p(({ theme }) => {
		const { fontSize, lineHeight, letterSpacing, fontWeight } = theme

		return {
			...theme.typography[type],

			fontSize: fontSize[size],
			fontWeight: weight && fontWeight[weight],
			letterSpacing: spacing && letterSpacing[spacing],
			lineHeight: density && lineHeight[density],
			textAlign: align
		}
	})

	return (
		<StyledText {...restProps}>
			{children}
		</StyledText>
	)
}

Text.propTypes = {
	align: PropTypes.oneOf(Object.keys(textAlign)),
	density: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  size: PropTypes.string,
  spacing: PropTypes.string,
	type: PropTypes.string,
	weight: PropTypes.string
}

Text.defaultProps = {
	align: textAlign.left,
	density: undefined,
  size: 'sm',
  spacing: undefined,
	type: 'primary',
	weight: undefined
}

export default Text
