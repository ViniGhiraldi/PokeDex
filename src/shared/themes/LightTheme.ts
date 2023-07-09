import { DefaultTheme } from "styled-components/dist/types";

export const LightTheme: DefaultTheme = {
    color: {
        background: '#f5f5f5',
        primary: {
            main: 'rgba(255, 255, 255, .75)',
            contrastText: '#252525'
        },
        secondary: {
            main: 'rgba(0, 0, 0, .25)',
            contrastText: '#252525'
        },
        tertiary: {
            main: '#303030',
            contrastText: '#fff'
        }
    },
    border: {
        radius: {
            small: '5px',
            medium: '10px',
            big: '20px'
        }
    },
    spacing: {
        pad: {
            small: '.5em',
            medium: '1em',
            big: '2em',
        },
        gap: {
            small: '4px',
            medium: '1em',
            big: '2em'
        },
        margin: {
            small: '.5em',
            medium: '1em',
            big: '2em'
        }
    },

    shadow: {
        defaultShadow: '0 0 10px rgba(0, 0, 0, .25)',
        directions: {
            down: '0 5px 10px rgba(0, 0, 0, .25)'
        }
    },

    screens: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
    }
}