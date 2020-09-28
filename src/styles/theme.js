import palette from './palette'

const fontSize = {
	xxl: '2.5rem',
	xl: '2rem',
	xlg: '1.8rem',
	lg: '1.6rem',
	md: '1.4rem',
	sm: '1.2rem',
	xsm: '1rem',
	xs: '0.8rem',
	xxs: '0.7rem'
}

const fontWeight = {
  light: 300,
  normal: 400,
	bold: 500,
	bolder: 700
}

const lineHeight = {
  comfort: '1.6em',
  cozy: '1.4em',
  compact: '1em',
}

const fonts = {
	primaryFont: 'Avenir, sans-serif'
}

const colors = {
	background: palette.dark,
	primary: palette.primary,
	warning: palette.warning,
	error: palette.error,
	success: palette.success,

	input: {
		default: '#CACCCF',
		placeholder: '#BDBDBD',
		border: '#E8E8E8',
		background: '#F9F9FA'
	},

	link: {
		primary: palette.black,
		docs: palette.primary
	}
}

const typography = {
	primaryHeadline: {
		fontFamily: fonts.primaryFont,
		fontSize: '1.6rem',
		fontWeight: 400,
		lineHeight: 1.2
	},
	primary: {
		fontFamily: fonts.primaryFont,
		fontSize: '1rem',
		fontWeight: 300,
		lineHeight: 1.2
	},
	secondary: {
		fontFamily: fonts.primaryFont,
		fontSize: '0.8rem',
		fontWeight: 300,
		lineHeight: 1.2
  },
  blog: {
    fontFamily: fonts.primaryFont,
		fontSize: '1.2rem',
		fontWeight: 300,
		lineHeight: 1.4
  }
}

const variables = {
	borderRadius: 0.25,
	gutter: 1
}

export default Object.freeze({
	colors,
	typography,
  variables,
  fontSize,
  fontWeight,
  lineHeight
})
