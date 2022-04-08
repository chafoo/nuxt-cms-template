<template>
  <component :is="_tag" :class="[propertiesClass, themeClass]" v-bind="$attrs">
    <template v-if="!richText">{{ content }}</template>
    <div v-else v-html="content"></div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { textSize } from "~/interfaces/sizes"
import { TextTag, textTag } from "~/components/library/ui-text/ui-text.interface"
import ThemeMixin from "~/mixins/theme"

export default defineComponent({
  name: "UiText",
  mixins: [ThemeMixin],
  props: {
    tag: {
      type: String,
      default: textTag.p,
    },
    content: {
      type: String,
      required: true,
    },
    // Options
    size: {
      type: String,
      default: textSize.normal,
    },
    richText: {
      type: Boolean,
      default: false,
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
    inline: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    propertiesClass(): Record<string, boolean> {
      return {
        text: true,
        "text--bold": this.bold,
        "text--underline": this.underline,
        "text--strikethrough": this.strikethrough,
        [`text--${this.size}`]: true,
      }
    },
    _tag(): TextTag {
      if (this.inline) return textTag.span
      if (this.richText) return textTag.div
      return this.tag as TextTag
    },
  },
})
</script>

<style scoped lang="scss">
span,
p {
  margin: 0;
  padding: 0;
}

.text {
  @include setup-color-themes("color");
  font-family: $primary-font;
  font-weight: $font-weight-normal;

  &--bold {
    font-weight: $font-weight-bold;
  }

  &--underline {
    text-decoration: underline;
  }

  &--strikethrough {
    text-decoration: line-through;
  }

  &--normal,
  &--large {
    font-size: $px16;
    line-height: $px20;
  }

  &--small,
  &--smaller {
    font-size: $px12;
    line-height: $px16;
  }

  @include media-medium-up() {
    &--normal {
      font-size: $px16;
      line-height: $px24;
    }

    &--small {
      font-size: $px12;
      line-height: $px16;
    }

    &--large {
      font-size: $px20;
      line-height: $px32;
    }
  }

  @include media-large-up() {
    &--large {
      font-size: $px24;
      line-height: $px32;
    }
  }
}
</style>
