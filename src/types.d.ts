import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      dark: string
      bg: string
      lightest: string
      red: string
      aliceblue: string
    }
  }
}
