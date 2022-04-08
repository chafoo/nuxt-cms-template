const largerSize = {
  larger: "larger",
} as const

const largeSize = {
  large: "large",
} as const

const normalSize = {
  normal: "normal",
} as const

const smallSize = {
  small: "small",
} as const

const smallerSize = {
  smaller: "smaller",
} as const

export const iconSize = {
  ...largeSize,
  ...normalSize,
  ...smallSize,
  ...smallerSize,
}

export type IconSize = typeof iconSize[keyof typeof iconSize]

export const textSize = {
  ...largeSize,
  ...normalSize,
  ...smallSize,
  ...smallerSize,
}

export type TextSize = typeof textSize[keyof typeof textSize]

export const ScreenSize = {
  xs: "xs", // 0
  sm: "sm", // 414
  md: "md", // 768
  lg: "lg", // 1024
  xl: "xl", // 1920
}
