/** @type {import('tailwindcss').Config} */


//
// Exported from https://palettte.app
// You can also copy/paste to import and edit
//
const exportedColors = [
  {
    "paletteName": "Primaries",
    "swatches": [
      {
        "name": "prim-50",
        "color": "DCFFFE"
      },
      {
        "name": "prim-100",
        "color": "CDF7F6"
      },
      {
        "name": "prim-200",
        "color": "ADE6E3"
      },
      {
        "name": "prim-300",
        "color": "89CECB"
      },
      {
        "name": "prim-400",
        "color": "67B5B2"
      },
      {
        "name": "prim-500",
        "color": "529895"
      },
      {
        "name": "prim-600",
        "color": "417A77"
      },
      {
        "name": "prim-700",
        "color": "325D5B"
      },
      {
        "name": "prim-800",
        "color": "1E3937"
      },
      {
        "name": "prim-900",
        "color": "0B1414"
      },
      {
        "name": "prim-950",
        "color": "010202"
      }
    ]
  },
]

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...exportedColors.map(c => c.swatches).reduce((a,b) => a.concat(b)).reduce((out, row) => {
          const pieces = row.name.split('-')
          const colorName = pieces.slice(0, pieces.length-1).join('-')
          const shade = pieces[pieces.length-1]
          out[colorName] = out[colorName] || {}
          out[colorName][shade] = `#${row.color}`
          return out
        }, {}),
      },

      fontFamily: {
        // 'ui': `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`.split(', '),
        // 'sans': [`"Informative"`, 'sans-serif'],
        // 'serif': `Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif`.split(', '),
        'brand': [`'Audiowide'`, 'monospace'],
      },
    },
  },
  plugins: [],
}

