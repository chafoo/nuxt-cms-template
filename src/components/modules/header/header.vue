<template>
  <header class="header">
    {{ content }}
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  width: 100%;
  height: $px96;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $colorSecondary600;
  color: $colorNeutral0;
  z-index: z-index(navigation);
}
</style>
