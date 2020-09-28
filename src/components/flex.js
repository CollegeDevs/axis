import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const columnAlignment = {
	initial: 'initial',
	top: 'flex-start',
	bottom: 'flex-end',
	center: 'center',
	stretch: 'stretch'
}

const rowAlignment = {
	initial: 'initial',
	left: 'flex-start',
	right: 'flex-end',
	center: 'center'
}

const StyledFlex = styled.div(props => {
	const { align, justify, reversed, zIndex } = props

	return {
		display: 'flex',
		flexDirection: reversed && 'column',
		alignItems: reversed ? rowAlignment[align] : columnAlignment[align],
		justifyContent: reversed ? columnAlignment[justify] : rowAlignment[justify],
		width: '100%',
		zIndex: zIndex && zIndex
	}
})

const Flex = ({ children, ...rest }) => (
	<StyledFlex {...rest}>{children}</StyledFlex>
)

Flex.propTypes = {
	align: PropTypes.oneOf(Object.keys(columnAlignment)),
	justify: PropTypes.oneOf(Object.keys(rowAlignment)),
	reversed: PropTypes.bool,
	zIndex: PropTypes.number
}

Flex.defaultProps = {
	align: columnAlignment.default,
	justify: rowAlignment.default,
	reversed: false,
	zIndex: null
}

export default Flex