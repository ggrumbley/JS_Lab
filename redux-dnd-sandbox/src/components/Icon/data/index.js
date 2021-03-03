const ICON_DATA = {
  'live-speech-bubble': {
    path:
      'M19.846 23.4h-8.117V10.514h3.13v10.174h4.987zm5.821 0h-3.13V10.514h3.13zm15.25-12.886L35.946 23.4h-3.112l-4.877-12.886h3.494l2.985 9.137h.073l2.966-9.137zM52.196 23.4h-8.99V10.514h8.663v2.64h-5.66v2.42h5.35v2.493h-5.35v2.676h5.988zM0 0v34.45h20.892v-5.083H5.082V5.083h52.886v24.284h-30.3l-5.082 5.083H63.05V0z',
    widthPx: 64,
    heightPx: 35,
    defaultFillHex: 'red',
  },
  'check-mark': {
    path:
      'M17 4c-.28 0-.53.11-.71.29L7 13.59 3.71 10.3A.965.965 0 003 10a1.003 1.003 0 00-.71 1.71l4 4c.18.18.43.29.71.29s.53-.11.71-.29l10-10A1.003 1.003 0 0017 4z',
    widthPx: 20,
    heightPx: 20,
    defaultFillHex: 'green',
  },
  dot: {
    path: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    widthPx: 200,
    heightPx: 200,
    defaultFillHex: 'blue',
  },
  star: {
    path:
      'M42.615,14.838H26.468l-5-14.555h-0.053l-5.03,14.555H0.001l13.272,8.831L8.29,37.998L8.237,38l13.144-8.999l13.139,8.911 l-4.974-14.311l13.075-8.755L42.615,14.838z',
    widthPx: 43,
    heightPx: 41.309,
    defaultFillHex: 'yellow',
  },
  phone: {
    path:
      'M15.18 0.29L16.45 0.64L17.66 1.11L18.81 1.71L19.88 2.41L20.87 3.22L21.78 4.13L22.59 5.12L23.29 6.19L23.89 7.34L24.36 8.55L24.71 9.82L24.93 11.14L25 12.5L24.93 13.86L24.71 15.18L24.36 16.45L23.89 17.66L23.29 18.81L22.59 19.88L21.78 20.87L20.87 21.78L19.88 22.59L18.81 23.29L17.66 23.89L16.45 24.36L15.18 24.71L13.86 24.93L12.5 25L11.14 24.93L9.82 24.71L8.55 24.36L7.34 23.89L6.19 23.29L5.12 22.59L4.13 21.78L3.22 20.87L2.41 19.88L1.71 18.81L1.11 17.66L0.64 16.45L0.29 15.18L0.07 13.86L0 12.5L0.07 11.14L0.29 9.82L0.64 8.55L1.11 7.34L1.71 6.19L2.41 5.12L3.22 4.13L4.13 3.22L5.12 2.41L6.19 1.71L7.34 1.11L8.55 0.64L9.82 0.29L11.14 0.07L12.5 0L13.86 0.07L15.18 0.29ZM8.24 6.09L8.08 6.18L7.93 6.3L6.23 7.99L6.17 8.07L6.11 8.16L6.07 8.26L6.03 8.37L6.01 8.48L6 8.59L6 8.7L6.02 8.79L6.33 9.64L6.68 10.5L7.08 11.37L7.52 12.22L8.01 13.06L8.54 13.85L9.12 14.6L9.74 15.28L10.42 15.91L11.17 16.49L11.97 17.02L12.8 17.51L13.66 17.94L14.53 18.33L15.39 18.66L16.23 18.94L16.33 18.97L16.43 18.98L16.54 18.97L16.65 18.94L16.76 18.9L16.86 18.85L16.95 18.79L17.03 18.73L18.72 17.04L18.84 16.89L18.93 16.72L18.98 16.54L19 16.36L18.98 16.18L18.93 16L18.84 15.83L18.72 15.68L17.34 14.39L17.19 14.27L17.02 14.18L16.85 14.13L16.66 14.11L16.48 14.13L16.3 14.18L16.13 14.27L15.99 14.39L15.31 15.07L15.16 15.19L14.99 15.28L14.82 15.33L14.63 15.35L14.45 15.33L14.27 15.28L14.1 15.19L13.96 15.07L9.96 11.04L9.84 10.89L9.75 10.72L9.7 10.55L9.68 10.36L9.7 10.18L9.75 10L9.84 9.83L9.96 9.69L10.63 9.01L10.75 8.86L10.84 8.69L10.89 8.52L10.91 8.33L10.89 8.15L10.84 7.97L10.75 7.8L10.63 7.65L9.28 6.3L9.13 6.18L8.96 6.09L8.79 6.04L8.6 6.02L8.42 6.04L8.24 6.09Z',
    widthPx: 25,
    heightPx: 25,
    defaultFillHex: 'gray',
  },
  'chevron-up': {
    path: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z',
    widthPx: 24,
    heightPx: 24,
    defaultFillHex: 'blue',
  },
  'chevron-right': {
    path: 'M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z',
    widthPx: 24,
    heightPx: 24,
    defaultFillHex: 'blue',
  },
  'chevron-down': {
    path: 'M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z',
    widthPx: 24,
    heightPx: 24,
    defaultFillHex: 'blue',
  },
  'chevron-left': {
    path: 'M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z',
    widthPx: 24,
    heightPx: 24,
    defaultFillHex: 'blue',
  },
  'bowie-knife': {
    path:
      'M416.833 424.997a51.536 51.536 0 0 0-13.354 22.973l-78.98-78.98 44.972-44.97 78.98 78.978a51.536 51.536 0 0 0-22.974 13.354zm-209.087-202.24l-86.28-97.65 97.653 86.277 90.77 80.19 14.927-14.927c-90.534-99.383-137.713-167.87-176.19-212.085 0 0-39.608 13.795-122.627-38.08 0 0 7.062 120.442 252.034 296.948l9.913-9.913zm155.22 82.16a14.43 14.43 0 0 0-20.37-20.37l-57.57 57.567a14.43 14.43 0 0 0 20.37 20.37zM486 429.15a33.746 33.746 0 0 0-47.722 0l-8.646 8.647a33.746 33.746 0 0 0 0 47.722z',
    widthPx: 512,
    heightPx: 512,
    defaultFillHex: '#fff',
  },
};

export default ICON_DATA;