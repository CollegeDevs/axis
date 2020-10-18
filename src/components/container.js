import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { breakpointMax, breakpointMin } from '../styles/mixins'

const commonContainerStyle = theme => `
  padding: 0 ${theme.variables.gutter}rem;
  margin-left: auto;
  margin-right: auto;

  ${breakpointMax('sm')} {
    padding: 0 ${0.5 * theme.variables.gutter}rem;
  }
`

const mediaQuery = theme => `
  ${breakpointMin('sm')} {
    max-width: 540px;
  }

  ${breakpointMin('md')} {
    max-width: 720px;
  }

  ${breakpointMin('lg')} {
    max-width: 960px;
  }

  ${breakpointMin('xl')} {
    max-width: 1140px;
  }
`

const Div = styled.div(({ fluid, theme }) => `
  ${commonContainerStyle(theme)}
  ${!fluid ? mediaQuery(theme) : ''}
`)

const Container = ({ children, fluid }) => (
  <Div fluid={fluid}>
    {children}
  </Div>
)

Container.propTypes = {
  fluid: PropTypes.bool
}

Container.defaultProps = {
  fluid: false
}

export default Container