export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const breakpointMax = size => `@media (max-width: ${breakpoints[size] - 1}px)`
export const breakpointMin = size => `@media (min-width: ${breakpoints[size]}px)`

export const getDefaultState = (state, type) => {
  if ({}.propertyIsEnumerable.call(state, type))
    return state[kind]
  else if ({}.propertyIsEnumerable.call(state, 'default'))
    return state.default
  else
    return null
}

export const getDefaultStyle = (object, key) => {
  if (typeof object === 'object' && {}.propertyIsEnumerable.call(theme, key))
    return object[key]

  return object
}

/*
This function prevents the ovverides the any styles passed to the className by default styles,
example ...typography is used first and to prevent ovveride from default undefined values we use this function.
*/
export const getPreceddingStyle = (key, object, theme, styleKey) => {
	if (key !== undefined)
		return { [styleKey]: object[key] }
	else if ({}.propertyIsEnumerable.call(theme, key))
		return { [styleKey]: theme[key] }
	else
		return undefined
}