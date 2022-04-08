<template>
  <svg viewBox="0 0 24 24" class="icon" :class="[iconClass]" :fill-rule="useIcon.fillRule || null">
    <defs>
      <path :id="useIcon.name" :d="useIcon.path" />
    </defs>
    <g :transform="useIcon.alignment || null">
      <use :xlink:href="`#${useIcon.name}`" :transform="useIcon.transform || null" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import SvgList from "~/components/library/ui-icon/svg-list"
import { iconSize } from "~/interfaces/sizes"
import type { Svg } from "~/components/library/ui-icon/ui-icon.interface"
import ThemeMixin from "~/mixins/theme"

export default defineComponent({
  name: "UiIcon",
  mixins: [ThemeMixin],
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      enum: Object.values(iconSize),
      default: iconSize.normal,
    },
    variant: {
      type: String,
      enum: Object.keys(SvgList),
      required: true,
    },
    withHover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClass(): Record<string, boolean> {
      return {
        "icon--withHover": this.withHover,
        [`icon--${this.size}`]: true,
      }
    },
    useIcon(): Svg {
      return (SvgList as Record<string, Svg>)[this.variant]
    },
  },
})
</script>

<style scoped lang="scss">
.icon {
  @include setup-color-themes("fill");
  display: inline-block;
  height: $px16;
  width: $px16;

  &--large {
    height: $px24;
    width: $px24;
  }

  &--small {
    height: $px12;
    width: $px12;
  }

  &--smaller {
    height: $px12;
    width: $px12;
  }

  @include media-medium-up {
    height: $px24;
    width: $px24;

    &--large {
      height: $px32;
      width: $px32;
    }

    &--small {
      height: $px16;
      width: $px16;
    }

    &--smaller {
      height: $px12;
      width: $px12;
    }
  }

  &.icon--withHover {
    cursor: pointer;

    &:hover {
      @include setup-color-themes("fill-color-on-hover");
    }
  }
}
</style>
