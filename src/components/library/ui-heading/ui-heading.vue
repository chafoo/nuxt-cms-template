<template>
  <component :is="tag" class="heading" :class="headingClass">
    {{ content }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "UiHeading",
  props: {
    content: {
      type: String,
      required: true,
    },
    // options
    round: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      required: true,
    },
    // Style properties
    bold: {
      type: Boolean,
      default: false,
    },
    strikethrough: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    headingClass(): Record<string, boolean> {
      return {
        "heading--bold": this.bold,
        "heading--underline": this.underline,
        "heading--strikethrough": this.strikethrough,
        "heading--round": this.round,
      }
    },
  },
})
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: $px0;
  padding: $px0;
}

.heading {
  color: $colorNeutral900;
  font-family: $primary-font;
  font-weight: $font-weight-bold;

  &--round {
    font-family: $pirmary-font-round;
  }

  &--bold {
    font-weight: $font-weight-bold;
  }

  &--underline {
    text-decoration: underline;
  }

  &--strikethrough {
    text-decoration: line-through;
  }
}

h1 {
  font-size: $px24;
  line-height: $px32;

  @include media-medium-up() {
    font-size: $px44;
    line-height: $px60;
  }
}

h2 {
  font-size: $px16;
  line-height: $px20;

  @include media-medium-up() {
    font-size: $px24;
    line-height: $px32;
  }

  @include media-large-up() {
    font-size: $px32;
    line-height: $px40;
  }
}

h3 {
  font-size: $px16;
  line-height: $px20;

  @include media-medium-up() {
    font-size: $px16;
    line-height: $px24;
  }

  @include media-large-up() {
    font-size: $px24;
    line-height: $px32;
  }
}
</style>
