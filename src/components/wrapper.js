import React from 'react'
import { ClassNames } from '@emotion/core'

const Wrapper = ({ children }) => {
  if (typeof children !== 'function')
    return children

  return (
    <ClassNames>
      {({ css, theme }) => children(({ css, theme }))}
    </ClassNames>
  )
}

export default Wrapper
