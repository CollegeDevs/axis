import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const textAlign = {
	left: 'left',
	right: 'right',
	center: 'center'
}

const StyledText = styled.p(({ theme, align, size, type }) => {
  const { fontSize } = theme

  return ({
    ...theme.typography[type],

    fontSize: fontSize[size],
    textAlign: align
  })
})

const Text = ({ children, ...rest }) => (
	<StyledText {...rest}>{children}</StyledText>
)

Text.propTypes = {
	align: PropTypes.oneOf(Object.keys(textAlign)),
	size: PropTypes.string,
	type: PropTypes.oneOf(['blog', 'primary', 'muted'])
}

Text.defaultProps = {
	align: textAlign.left,
	size: 'sm',
	type: 'primary'
}

export default Text