<template>
  <div>
    <component
      :is="section.tag"
      v-for="(section, index) in sections"
      :key="`${section.tag}-${index}`"
      v-bind="section.props"
      :class="sectionClass(section)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { FetchReturn } from "@nuxt/content/types/query-builder"
import Sections from "~/components/sections"
import { PageConfig, Section } from "~/interfaces/generic-page"

export default defineComponent({
  name: "GenericPage",
  components: {
    ...Sections,
  },
  async asyncData({ $content, params, error, i18n }) {
    const locale = i18n.locale

    // Fetch page configuration
    const path = "pages/generic/"
    const slug = params.slug ? `${path}${params.slug}.${locale}` : `${path}/index.${locale}`
    const pageConfig = (await $content(slug)
      .fetch()
      .catch((_) => {
        error({
          statusCode: 404,
          message: i18n.t("error.not-found", { x: i18n.t("constant.page") }) as string,
        })
      })) as PageConfig

    // Fetch section configuration
    const sections = await Promise.all(
      pageConfig.sections.map(async (sectionPath: string): Promise<(void | FetchReturn | FetchReturn[]) | Section> => {
        return await $content(`${sectionPath}.${locale}`)
          .fetch()
          .catch((_) => {
            error({
              statusCode: 404,
              message: `${i18n.t("error.not-found", { x: i18n.t("constant.section") }) as string} ${sectionPath}`,
            })
          })
      }),
    )

    return {
      sections,
    }
  },
  methods: {
    sectionClass(section: Section): Record<string, boolean> {
      return { "frame--page": section.frame }
    },
  },
})
</script>
