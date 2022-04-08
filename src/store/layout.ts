import { defineStore } from "pinia"
import { Context } from "@nuxt/types"
import { PageConfig } from "~/interfaces/generic-page"

export const useLayoutStore = defineStore("layoutStore", {
  state: () => ({
    header: null,
    footer: null,
  }),
  actions: {
    // Is called on nuxt-server-init middleware
    async nuxtServerInit({ $content, i18n, error }: Context) {
      const locale = i18n.locale

      // Fetch layout translation
      const path = `layouts/default.${locale}`
      const layout = (await $content(path)
        .fetch()
        .catch((_) => {
          error({
            statusCode: 404,
            message: i18n.t("error.not-found", { x: i18n.t("constant.layout") }) as string,
          })
        })) as PageConfig

      this.header = layout.header
      this.footer = layout.footer
    },
  },
})
