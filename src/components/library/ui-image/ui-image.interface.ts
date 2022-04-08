import { ScreenSize } from "~/interfaces/sizes"

export const mediaBreakpoint = {
  [ScreenSize.sm]: "(min-width: 414px)",
  [ScreenSize.md]: "(min-width: 768px)",
  [ScreenSize.lg]: "(min-width: 1024px)",
  [ScreenSize.xl]: "(min-width: 1920px)",
}

export type MediaBreakpoint = typeof mediaBreakpoint[keyof typeof mediaBreakpoint]
export type MediaBreakpointKey = keyof typeof mediaBreakpoint

export interface Srcset {
  srcset: string
  mediaBreakpoint: MediaBreakpoint
}
