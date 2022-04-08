<template>
  <picture>
    <source
      v-for="srcset in srcsets"
      :key="`srcset_${srcset.mediaBreakpoint}`"
      :media="`${getMedia(srcset.mediaBreakpoint)}`"
      :srcset="srcset.srcset"
    />
    <nuxt-img v-bind="$attrs" />
  </picture>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { Srcset, mediaBreakpoint, MediaBreakpointKey } from "~/components/library/ui-image/ui-image.interface"

export default defineComponent({
  name: "UiImage",
  props: {
    srcsets: {
      type: Array as () => Srcset[],
      required: false,
    },
  },
  methods: {
    getMedia(param: string): string {
      return mediaBreakpoint[param as MediaBreakpointKey]
    },
  },
})
</script>
