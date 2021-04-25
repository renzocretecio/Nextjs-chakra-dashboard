import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
})

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                background: '#181818',
                color: '#ddd6d6',
            },
            a: {
                textDecoration: 'none',
                padding: 3,
                _hover: {
                    background: '#2e2e2e',
                    borderRadius: 'md',
                    textDecoration: 'none !important',
                },
            },
            '&::-webkit-scrollbar': {
                width: '4px',
                height: '4px',
            },
            '&::-webkit-scrollbar-track': {
                width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#242629',
                borderRadius: '24px',
            },
        },
    },
    colors: {
        text: {
            headline: '#fffffe',
        },
        btn: {
            background: '#0f0e17',
            txt: '#fffffe',
        },
        background2: '#e6e6e6',
        light: '#fffffe',
        dark: '#0f0e17',
        secondary: '#4f546b',
        shade: {
            50: '#4F546B',
            100: '#484D62',
            200: '#43475A',
            300: '#3D4153',
            400: '#383B4B',
            500: '#323544',
            600: '#2D2F3C',
            700: '#272A35',
            800: '#21242D',
            900: '#1C1E26',
        },
        highlight: '#4fc4cf',
    },

    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: 'semibold', // Normally, it is "semibold"

                _focus: {
                    boxShadow: '0 0 0 1px #0f0e17',
                },
            },
            // 2. We can add a new button size or extend existing
            sizes: {
                xl: {
                    h: '56px',
                    fontSize: 'lg',
                    px: '32px',
                },
            },
            // 3. We can add a new visual variant
            variants: {
                // 4. We can override existing variants
                solid: {
                    bg: '#0f0e17',
                    color: '#fffffe',
                    ':hover': {
                        bg: '#0f0e17',
                        color: '#fffffe',
                    },
                },
                outline: {
                    bg: '#fffffe',
                    color: '#0f0e17',
                    borderColor: '#0f0e17',
                    ':hover': {
                        bg: '#fffffe',
                        color: '#0f0e17',
                    },
                },
            },
            defaultProps: {},
        },
    },
})

export default theme