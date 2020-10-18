import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { breakpoints, breakpointMax, breakpointMin } from '../styles/mixins'

const allowedBreakpoints = Object.keys(breakpoints).filter(
	breakpoint => breakpoint !== 'xs'
)

const applyMediaQuery = props => {
	const queries = allowedBreakpoints
		.filter(kay => props[kay])
		.map(
			screenSize =>
				`${breakpointMin(screenSize)} { grid-column: auto / span ${
					props[screenSize]
				}};`
		)

	return queries.join().replace(/,/g, '')
}

const StyledColumn = styled.div`
	grid-column: auto / span ${props => props.xs};
	${props => applyMediaQuery(props)};
	margin: ${({ theme }) => 0 * theme.variables.gutter}rem;

	${breakpointMax('sm')} {
		margin: ${({ theme }) => 0 * theme.variables.gutter}rem;
	}
`

const Column = ({ children, ...rest }) => (
	<StyledColumn {...rest}>{children}</StyledColumn>
)

Column.propTypes = allowedBreakpoints.reduce(
	(acc, val) => ((acc[val] = PropTypes.number), acc),
	{}
)

Column.defaultProps = {
	xs: 1
}

export default Column