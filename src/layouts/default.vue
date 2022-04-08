<template>
  <div>
    <mod-header :content="header" />
    <nuxt />
    <mod-footer :content="footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { mapState } from "pinia"
import { useLayoutStore } from "~/store/layout"

import ModHeader from "~/components/modules/header/header.vue"
import ModFooter from "~/components/modules/footer/footer.vue"

export default defineComponent({
  name: "Default",
  components: { ModHeader, ModFooter },
  computed: {
    ...mapState(useLayoutStore, ["header", "footer"]),
  },
})
</script>

<style scoped></style>
