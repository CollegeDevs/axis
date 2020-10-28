import React from 'react'
import styled from '@emotion/styled'

import { breakpointMax } from '../styles/mixins'

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	width: 100%;
	gap: ${({ theme }) => `${2 * theme.variables.gutter}rem ${theme.variables.gutter}rem`};

	${breakpointMax('sm')} {
		gap: ${({ theme }) => `${1 * theme.variables.gutter}rem ${0.5 * theme.variables.gutter}rem`};
	}
`

const Row = ({ children, ...rest }) => <StyledGrid {...rest}>{children}</StyledGrid>

export default Row
