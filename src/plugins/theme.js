// 擴充樣式
const extendTheme = {
  colors: {
    white: '#F5F5F5',
    blue: '#10A2F6',
    blue_light: '#1CC8EE',
    gray_light: '#414242',
    black: '#131414',
    gray: '#1C1D1D',
  },
  spacing: {
    '1px': '1px',
    '2px': '2px',
    '6px': '6px',
    '7px': '7px',
    '8px': '8px',
    '9px': '9px',
    '10px': '10px',
    '12px': '12px',
    '13px': '13px',
    '14px': '14px',
    '18px': '18px',
    '30px': '30px',
    '32px': '32px',
    '54px': '54px',
    // 4px
    1: '0.25rem',
    // 8px
    2: '0.5rem',
    // 12px
    3: '0.75rem',
    // 16px
    4: '1rem',
    // 20px
    5: '1.25rem',
    // 24px
    6: '1.5rem',
    // 28px
    7: '1.75rem',
    // 32px
    8: '2rem',
    // 36px
    9: '2.25rem',
    10: '2.5rem',
    // 44px
    11: '2.75rem',
    // 48px
    12: '3rem',
    14: '3.5rem',
    // 64px
    16: '4rem',
    // 72px
    18: '4.5rem',
    '50%': '50%',
  },
  animation: {
    spinner: 'spin .75s ease infinite',
    balloon: 'balloonHorizontal 3s ease infinite',
    fadeIn: 'fadeIn .15s linear',
    progressBar: 'progressBar 1s linear',
    fadeInUp: 'fadeInUp .35s cubic-bezier(0, 0, 0.2, 1)',
    marquee: 'marquee 32s linear infinite',
  },
  opacity: {
    // 0.32 * 0.48
    1536: '0.1536',
    12: '0.12',
    20: '0.2',
    28: '0.28',
    30: '0.3',
    32: '0.32',
    40: '0.40',
    48: '0.48',
    50: '0.5',
    80: '0.8',
  },
  borderOpacity: {
    20: '0.2',
    32: '0.32',
    50: '0.5',
  },
  borderRadius: {
    2: '2px',
    4: '4px',
    8: '8px',
    10: '10px',
    16: '16px',
    24: '24px',
    50: '50%',
  },
  borderWidth: {
    2: '2px',
  },
  fontFamily: {
    Mula: 'Mula',
    base: 'Arial, Noto Sans SC, "Noto Sans SC" ,"PingFang SC", "Microsoft Yahei", Microsoft Yahei, 微軟雅黑體, "微軟雅黑體", MicrosoftYahei, MicrosoftYaHei, 微軟正黑體, "微軟正黑體", Microsoft JhengHei, "Microsoft JhengHei", "黑體-繁", 黑體-繁, "Heiti TC", Heiti TC, sans-serif',
  },
  fontSize: {
    // 12px
    xs: ['0.75rem', { lineHeight: '16px' }],
    // 14px
    sm: ['0.875rem', { lineHeight: '21px' }],
    // 16px / 24px
    base: ['1rem', { lineHeight: '1.5rem' }],
    // 20px / 24px
    body: ['1.25rem', { lineHeight: '1.5rem' }],
    // 28px / 40px
    H3: ['1.75rem', { lineHeight: '2.5rem' }],
    // 32px
    ml: ['2rem', { lineHeight: '3rem' }],
    // 36px
    H2: ['2.25rem', { lineHeight: '3rem' }],
  },
  keyframes: {
    spin: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
  lineHeight: {
    '20px': '20px',
    '24px': '24px',
    '32px': '32px',
  },
  width: {
    '9px': '9px',
    40: '10rem',
  },
  minHeight: {
    24: '24px',
    32: '32px',
    48: '48px',
    56: '56px',
  },
  minWidth: {
    base: '1203px',
  },
  rotate: {
    180: '180deg',
    '-90': '-90deg',
  },
  transitionDuration: {
    350: '350ms',
    500: '500ms',
  },
  zIndex: {
    1: '1',
    2: '2',
    // dropdown
    3: '3',
    // mask
    mask: '4',
    4: '4',
    // popup
    popup: '5',
    5: '5',
    6: '6',
  },
  translate: {
    '50%': '50%',
  },
}

const customTheme = {
  screens: {},
  colors: {
    ...extendTheme.colors,
    transparent: 'transparent',
    'pure-black': '#000',
    'pure-white': '#fff',
  },
  spacing: {
    ...extendTheme.spacing,
    0: '0px',
  },
  animation: {
    ...extendTheme.animation,
    none: 'none',
  },
  backgroundColor: (theme) => theme('colors'),
  backgroundImage: {
    none: 'none',
  },
  backgroundOpacity: (theme) => theme('opacity'),
  backgroundPosition: {
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top',
  },
  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
  },
  borderColor: (theme) => ({
    ...theme('colors'),
    DEFAULT: theme('colors.pure-black', 'currentColor'),
  }),
  borderOpacity: {
    ...extendTheme.borderOpacity,
  },
  borderRadius: {
    ...extendTheme.borderRadius,
    none: '0',
    full: '9999px',
  },
  borderWidth: {
    ...extendTheme.borderWidth,
    DEFAULT: '1px',
    0: '0px',
  },
  boxShadow: {
    none: 'none',
  },
  container: {},
  cursor: {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    'not-allowed': 'not-allowed',
  },
  divideColor: {},
  divideOpacity: {},
  divideWidth: {},
  fill: { current: 'currentColor' },
  flex: {
    1: '1 1 0%',
    auto: '1 1 auto',
    initial: '0 1 auto',
    none: 'none',
  },
  flexGrow: {
    0: '0',
    DEFAULT: '1',
  },
  flexShrink: {
    0: '0',
    DEFAULT: '1',
  },
  fontFamily: {
    ...extendTheme.fontFamily,
  },
  fontSize: {
    ...extendTheme.fontSize,
  },
  fontWeight: {
    normal: 'normal',
    500: 500,
    bold: 700,
    extrabold: 900,
  },
  gap: (theme) => theme('spacing'),
  gradientColorStops: (theme) => theme('colors'),
  gridAutoColumns: {},
  gridAutoRows: {},
  gridColumn: {},
  gridColumnEnd: {},
  gridColumnStart: {},
  gridRow: {},
  gridRowStart: { },
  gridRowEnd: {},
  transformOrigin: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  height: (theme) => ({
    ...extendTheme.height,
    auto: 'auto',
    ...theme('spacing'),
    full: '100%',
    screen: '100vh',
    header: '72px',
  }),
  inset: (theme) => ({
    auto: 'auto',
    ...theme('spacing'),
  }),
  keyframes: {
    ...extendTheme.keyframes,
  },
  letterSpacing: {},
  lineHeight: {
    ...extendTheme.lineHeight,
    none: '1',
    normal: '1.5',
  },
  listStyleType: {
    none: 'none',
  },
  margin: (theme, { negative }) => ({
    auto: 'auto',
    ...theme('spacing'),
    ...negative(theme('spacing')),
  }),
  maxHeight: (theme) => ({
    ...theme('spacing'),
    full: '100%',
    screen: '100vh',
  }),
  maxWidth: {},
  minHeight: {
    ...extendTheme.spacing,
    ...extendTheme.minHeight,
    0: '0px',
    full: '100%',
    screen: '100vh',
  },
  minWidth: {
    ...extendTheme.spacing,
    ...extendTheme.minWidth,
    0: '0px',
    full: '100%',
  },
  objectPosition: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    top: 'top',
  },
  opacity: {
    ...extendTheme.opacity,
    0: '0',
    1: '1',
  },
  order: {},
  outline: {
    none: ['2px solid transparent', '2px'],
  },
  padding: (theme) => theme('spacing'),
  placeholderColor: (theme) => theme('colors'),
  placeholderOpacity: (theme) => theme('opacity'),
  ringColor: {},
  ringOffsetColor: {},
  ringOffsetWidth: {},
  ringOpacity: {},
  ringWidth: {},
  rotate: {
    ...extendTheme.rotate,
  },
  scale: {},
  skew: {},
  space: (theme, { negative }) => ({
    ...theme('spacing'),
    ...negative(theme('spacing')),
  }),
  stroke: {},
  strokeWidth: {},
  textColor: (theme) => theme('colors'),
  textOpacity: (theme) => theme('opacity'),
  transitionDuration: {
    ...extendTheme.transitionDuration,
    DEFAULT: '150ms',
  },
  transitionDelay: {
    150: '150ms',
  },
  transitionProperty: {},
  transitionTimingFunction: {},
  translate: {
    ...extendTheme.translate,
  },
  width: (theme) => ({
    ...extendTheme.width,
    ...theme('spacing'),
    auto: 'auto',
    full: '100%',
    screen: '100vw',
  }),
  zIndex: {
    ...extendTheme.zIndex,
    '-1': '-1',
    auto: 'auto',
    0: '0',
  },
}

module.exports = customTheme
