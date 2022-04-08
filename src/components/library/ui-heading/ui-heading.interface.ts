export enum HeadingVariant {
  h1 = "H1",
  h2 = "H2",
  h3 = "H3",
}

export interface UiHeadingProps {
  round?: boolean
  variant: HeadingVariant
}
