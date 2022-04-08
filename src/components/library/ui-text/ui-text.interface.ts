import { TextSize } from "~/interfaces/sizes"

export const textTag = {
  div: "div",
  p: "p",
  span: "span",
} as const

export type TextTag = typeof textTag[keyof typeof textTag]

export interface UiTextProps {
  content: string
  tag?: TextTag
  size?: TextSize
  richText?: boolean
  bold?: boolean
  strikethrough?: boolean
  inline?: boolean
  underline?: boolean
}
