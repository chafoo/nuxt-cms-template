import { defineComponent } from "@vue/composition-api"
import { Theme } from "~/interfaces/theme"

export default defineComponent({
  name: "ThemeMixin",
  props: {
    theme: {
      type: String,
      required: false,
      enum: Theme,
      default: Theme.default,
    },
  },
  computed: {
    themeClass(): string {
      return `theme--${this.theme}`
    },
  },
})
