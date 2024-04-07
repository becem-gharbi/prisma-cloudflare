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
          primaryColorPressed: '#1d4ed8',
          borderColor: '#d1d5db'
        },
        Card: {
          borderColor: '#d1d5db'
        }
      },

      dark: {
        common: {
          primaryColor: '#3b82f6',
          primaryColorHover: '#60a5fa',
          primaryColorPressed: '#4b5563',
          borderColor: '#1f2937'
        },
        Card: {
          borderColor: '#1f2937'
        }
      }
    }
  }
})
