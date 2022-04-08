<template>
  <footer class="footer">
    {{ content }}
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: $px300;
  background-color: $colorSecondary600;
  color: $colorNeutral0;
}
</style>
