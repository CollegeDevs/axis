import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const crossAxis = {
	initial: 'initial',
	top: 'flex-start',
	bottom: 'flex-end',
	center: 'center',
	start: 'start',
	end: 'end',
	stretch: 'stretch'
}

const mainAxis = {
	...crossAxis,

	spaceBetween: 'space-between',
	spaceAround: 'space-around',
	spaceEvenly: 'space-evenly',
	stretch: 'stretch'
}

const StyledFlex = styled.div(props => {
	const { align, justify, height, reversed, width, zIndex } = props

	return {
		display: 'flex',
		flexDirection: reversed && 'column',
		alignItems: reversed ? mainAxis[align] : crossAxis[align],
		justifyContent: reversed ? crossAxis[justify] : mainAxis[justify],
		height: height,
		width: width,
		zIndex: zIndex && zIndex
	}
})

const Flex = ({ children, ...rest }) => (
	<StyledFlex {...rest}>{children}</StyledFlex>
)

Flex.propTypes = {
	align: PropTypes.oneOf(Object.keys(crossAxis)),
	justify: PropTypes.oneOf(Object.keys(mainAxis)),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	reversed: PropTypes.bool,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	zIndex: PropTypes.number
}

Flex.defaultProps = {
	align: crossAxis.default,
	justify: mainAxis.default,
	height: '100%',
	reversed: false,
	width: '100%',
	zIndex: null
}

export default Flex