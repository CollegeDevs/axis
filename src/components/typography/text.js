import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { getPreceddingStyle } from '../../styles/mixins'

const textAlign = {
  left: 'left',
  right: 'right',
  center: 'center'
}

const Text = props => {
	const { children, align, density, spacing, size, type, weight, ...restProps } = props

	const StyledText = styled.p(({ theme }) => {
		const { fontSize, fontWeight, letterSpacing, lineHeight } = theme
		const typography = theme.typography[type]

		return {
			...typography,

			...getPreceddingStyle(size, fontSize, typography, 'fontSize'),
			...getPreceddingStyle(weight, fontWeight, typography, 'fontWeight'),
			...getPreceddingStyle(spacing, letterSpacing, typography, 'letterSpacing'),
			...getPreceddingStyle(density, lineHeight, typography, 'lineHeight'),
			...getPreceddingStyle(align, textAlign, typography, 'textAlign')
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
	align: undefined,
	density: undefined,
  size: undefined,
  spacing: undefined,
	type: 'primary',
	weight: undefined
}

export default Text
