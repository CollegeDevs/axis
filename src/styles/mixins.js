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

export const getPreceddingStyle = (key, object, theme, styleKey) => {
	if (key !== undefined)
		return { [styleKey]: object[key] }
	else if ({}.propertyIsEnumerable.call(theme, key))
		return { [styleKey]: theme[key] }
	else
		return undefined
}
