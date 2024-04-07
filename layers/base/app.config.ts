export default defineAppConfig({
  naiveui: {
    themeConfig: {
      shared: {
        common: {
          borderRadius: '4px',
          baseColor: 'white'
        },
        Result: {
          titleFontSizeMedium: '22px'
        }
      },

      light: {
        common: {
          primaryColor: '#2563eb',
          primaryColorHover: '#3b82f6',
          primaryColorPressed: '#1d4ed8'
        }
      },

      dark: {
        common: {
          primaryColor: '#3b82f6',
          primaryColorHover: '#60a5fa',
          primaryColorPressed: '#4b5563'
        }
      }
    }
  }
})
