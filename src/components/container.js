import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { breakpointMin } from '../styles/mixins'

const commonContainerStyle = `
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-left: auto;
  margin-right: auto;
`

const mediaQuery = `
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

const Div = styled.div(({ fluid }) => `
  ${commonContainerStyle}
  ${!fluid ? mediaQuery : ''}
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