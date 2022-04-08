export const blockVariant = {
  fullRow: "full-row",
  halfRow: "half-row",
  thirdRow: "third-row",
  doubleThirdRow: "double-third-row",
  fourthRow: "fourth-row",
} as const

export type BlockVariant = typeof blockVariant[keyof typeof blockVariant]

export const blockVerticalPosition = {
  top: "top",
  center: "center",
  bottom: "bottom",
} as const

export type BlockVerticalPosition = typeof blockVerticalPosition[keyof typeof blockVerticalPosition]

export const blockHorizontalPosition = {
  left: "left",
  center: "center",
  right: "right",
} as const

export type BlockHorizontalPosition = typeof blockHorizontalPosition[keyof typeof blockHorizontalPosition]

export interface ButtonMargin {
  top: number
  left: number
  bottom: number
  right: number
}

export interface UiBlockProps {
  variant: BlockVariant
  verticalPosition?: BlockVerticalPosition
  horizontalPosition?: BlockHorizontalPosition
  margin?: ButtonMargin
}
