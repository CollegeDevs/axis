import React from 'react'
import styled from '@emotion/styled'

import { breakpointMax } from '../styles/mixins'

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	width: 100%;
	gap: ${({ theme }) =>
		`${2 * theme.variables.gutter}rem ${theme.variables.gutter}rem`};
	margin: 0 ${({ theme }) => -1 * theme.variables.gutter}rem;
	${breakpointMax('sm')} {
		margin: 0;
	}
`

const Row = ({ children, ...rest }) => <StyledGrid>{children}</StyledGrid>

export default Row
