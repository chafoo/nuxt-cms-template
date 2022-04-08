<template>
  <section class="layout-section grid-container">
    <ui-block
      v-for="(section, index) in sections"
      :key="`${section.tag}-${index}`"
      class="layout-section__block"
      v-bind="section.block"
    >
      <component :is="section.tag" v-bind="section.props" />
    </ui-block>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import UiText from "~/components/library/ui-text/ui-text.vue"
import UiButton from "~/components/library/ui-button/ui-button.vue"
import UiBlock from "~/components/library/ui-block/ui-block.vue"
import UiHeading from "~/components/library/ui-heading/ui-heading.vue"
import UiImage from "~/components/library/ui-image/ui-image.vue"
import { Section } from "~/interfaces/generic-page"

export default defineComponent({
  name: "LayoutSection",
  components: { UiBlock, UiText, UiButton, UiHeading, UiImage },
  props: {
    sections: {
      type: Array as () => Section[],
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.layout-section {
  &::v-deep img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
