import { IconSize, iconSize, TextSize, textSize } from "~/interfaces/sizes"

export const buttonVariant = {
  primary: "primary",
  secondary: "secondary",
  textIcon: "text-icon",
} as const

type ButtonVariant = typeof buttonVariant[keyof typeof buttonVariant]

export const buttonTag = {
  a: "a",
  nuxtLink: "nuxt-link",
  button: "button",
} as const

export type ButtonTag = typeof buttonTag[keyof typeof buttonTag]

export const buttonTarget = {
  blank: "_blank", // Opens the linked document in a new window or tab
  self: "_self", // Opens the linked document in the same frame as it was clicked (this is default)
  parent: "_parent", // Opens the linked document in the parent frame
  top: "_top", // Opens the linked document in the full body of the window
} as const

export type ButtonTarget = typeof buttonTarget[keyof typeof buttonTarget]

export interface UiButtonProps {
  content?: string
  size?: TextSize
  target?: ButtonTarget
  variant?: ButtonVariant
  bold?: boolean
  strikethrough?: boolean
  inline?: boolean
  underline?: boolean
  iconSize?: IconSize
  iconLef?: string
  iconRight?: string
}
