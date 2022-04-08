import { IconSize } from "~/interfaces/sizes"
import SvgList from "~/components/library/ui-icon/svg-list"

export interface Svg {
  name: string
  path: string
  transform?: string
  alignment?: string
  fillRule?: string
}

export interface UiIconProps {
  size?: IconSize
  variant: keyof typeof SvgList
  withHover?: boolean
}
