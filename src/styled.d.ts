import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
          background: string,
          primary: {
            main: string,
            contrastText: string,
          },
          secondary: {
            main: string,
            contrastText: string,
          },
          tertiary: {
            main: string,
            contrastText: string
          }
        },
      
        border: {
          radius: {
            small: string,
            medium: string,
            big: string
          }
        },

        spacing: {
            pad: {
                small: string,
                medium: string,
                big: string,
            },
            gap: {
                small: string,
                medium: string,
                big: string
            },
            margin: {
                small: string,
                medium: string,
                big: string
            }
        },

        shadow: {
            defaultShadow: string,
            directions: {
                down: string
            }
        },

        screens: {
            sm: number,
            md: number,
            lg: number,
            xl: number
        }
    }
}