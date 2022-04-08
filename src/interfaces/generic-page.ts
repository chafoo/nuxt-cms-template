import { FetchReturn } from "@nuxt/content/types/query-builder"
import { UiBlockProps } from "~/components/library/ui-block/ui-block.interface"
import { UiButtonProps } from "~/components/library/ui-button/ui-button.interface"
import { UiIconProps } from "~/components/library/ui-icon/ui-icon.interface"
import { UiTextProps } from "~/components/library/ui-text/ui-text.interface"

export type SectionProps = UiButtonProps | UiIconProps | UiTextProps

export interface Section {
  tag: string
  props: SectionProps
  block: UiBlockProps
  frame: boolean
}

export interface PageConfig extends FetchReturn {
  sections: string[]
}
