<template>
  <component
    :is="tag"
    :target="target"
    :class="[classObject, themeClass]"
    class="button"
    type="button"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <UiIcon v-if="iconLef" class="button__icon" :size="iconSize" :variant="iconLef" />

    <UiText
      v-if="content"
      class="button__text"
      :bold="bold"
      :inline="inline"
      :strikethrough="strikethrough"
      :underline="underline"
      :content="content"
    />

    <UiIcon v-if="iconRight" class="button__icon" :size="iconSize" :variant="iconRight" />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import ThemeMixin from "~/mixins/theme"
import UiIcon from "~/components/library/ui-icon/ui-icon.vue"
import UiText from "~/components/library/ui-text/ui-text.vue"
import { iconSize, textSize } from "~/interfaces/sizes"
import { buttonVariant, buttonTag, ButtonTag, buttonTarget } from "~/components/library/ui-button/ui-button.interface"

export default defineComponent({
  name: "UiButton",
  components: {
    UiIcon,
    UiText,
  },
  mixins: [ThemeMixin],
  props: {
    content: {
      type: String,
      required: true,
    },
    // Options
    size: {
      type: String,
      default: textSize.normal,
    },
    variant: {
      type: String,
      default: buttonVariant.primary,
    },
    target: {
      type: String,
      default: buttonTarget.self,
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
    // Icon settings
    iconSize: {
      type: String,
      default: iconSize.normal,
    },
    iconLef: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
  },
  computed: {
    classObject(): Record<string, boolean> {
      const button = "button"

      return {
        [`${button}--primary`]: this.variant === buttonVariant.primary,
        [`${button}--secondary`]: this.variant === buttonVariant.secondary,
        [`${button}--text-icon`]: this.variant === buttonVariant.textIcon,
        [`${button}__size--${this.size}`]: true,
      }
    },
    tag(): ButtonTag {
      if (this.$attrs.href) return buttonTag.a
      if (this.$attrs.to) return buttonTag.nuxtLink
      return buttonTag.button
    },
  },
})
</script>

<style scoped lang="scss">
.button {
  align-items: center;
  border-radius: $px192;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: $px0;
  text-align: center;
  transition: all 200ms ease-out;
  border-width: $px2;
  border-style: solid;

  &:not(&--text-icon) {
    transition: all 0ms ease-out;
  }

  &--primary {
    padding: $px8 $px20;
    border: solid $px2 get-color("primary", "border-color");
    background-color: get-color("primary", "background-color");

    .button__text {
      color: get-color("primary", "text-color-over-background");
    }

    .button__icon {
      fill: get-color("primary", "fill");
    }

    &:hover:not([disabled="disabled"], [disabled="true"]) {
      border: solid $px2 get-color("primary", "boarder-color-on-hover");
      background-color: get-color("primary", "background-color-on-hover");

      .button__text {
        color: get-color("primary", "text-color-on-hover");
      }

      .button__icon {
        fill: get-color("primary", "fill-color-on-hove");
      }
    }
  }

  &--secondary {
    padding: $px8 $px20;
    border: solid $px2 get-color("secondary", "border-color");
    background-color: get-color("secondary", "backround-color");

    .button__text {
      color: get-color("secondary", "text-color-over-background");
    }

    .button__icon {
      fill: get-color("secondary", "fill");
    }

    &:hover:not([disabled="disabled"], [disabled="true"]) {
      color: get-color("secondary", "text-color-on-hover");
      border: solid $px2 get-color("secondary", "boarder-color-on-hover");
      background-color: get-color("secondary", "background-color-on-hover");

      .button__text {
        color: get-color("secondary", "text-color-over-background-on-hover");
      }

      .button__icon {
        fill: get-color("secondary", "fill-color-on-hove");
      }
    }
  }

  &--text-icon {
    background-color: transparent;
    border: none;
    padding: $px0;

    &:not([disabled]):hover {
      .button__text {
        color: get-color("primary", "color");
      }

      .button__icon {
        fill: get-color("primary", "fill");
      }
    }
  }

  &[disabled="disabled"],
  &[disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
}

.button {
  font: unset;

  svg {
    min-width: $px12;
  }
}
</style>
