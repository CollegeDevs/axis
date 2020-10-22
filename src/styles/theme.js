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

const letterSpacing = {
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
	white: palette.white,
	warning: palette.warning,
	dark: palette.dark,
}

const typography = {
	heading: {
		fontFamily: fonts.primaryFont,
		fontSize: fontSize.lg,
		fontWeight: fontWeight.normal,
		lineHeight: 1.2
	},
	primary: {
		fontFamily: fonts.primaryFont,
		fontSize: fontSize.xsm,
		fontWeight: fontWeight.normal,
		lineHeight: 1.2
	},
	button: {
		fontFamily: fonts.primaryFont,
		fontSize: fontSize.xs,
		fontWeight: fontWeight.normal,
		lineHeight: 1.2
  },
  blog: {
    fontFamily: fonts.primaryFont,
		fontSize: fontSize.sm,
		fontWeight: fontWeight.normal,
		lineHeight: 1.4
	},
	muted: {
    fontFamily: fonts.primaryFont,
		fontSize: fontSize.xxs,
		fontWeight: fontWeight.normal,
		lineHeight: 1,
		opacity: 0.9 // You can add extra styles like this
  }
}

const variables = {
	borderRadius: 0.25,
	borderWidth: 1,
	gutter: 1
}
/*
States defines the current state of the selected element.
*/

const states = {
	button: {
		primary: {
			'&:hover': {
				background: palette.white,
				borderColor: palette.white,
				color: colors.primary
			}
		},
		warning: {
			'&:hover': {
				background: palette.white,
				borderColor: palette.white,
				color: colors.warning
			}
		},
		success: {
			'&:hover': {
				background: palette.white,
				borderColor: palette.white,
				color: colors.success
			}
		},
	},
	link: {
		// Provide default if you want to provide same for all states
		default: {
			'&:hover': {
				textDecoration: `underline`
			}
		}
	}
}

/*
Transitions
*/

const transition = {
	button: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
}

export default Object.freeze({
	colors,
	// Typography
  fontSize,
  fontWeight,
	lineHeight,
	letterSpacing,
	typography,
	states,
	transition,
  variables,
})
