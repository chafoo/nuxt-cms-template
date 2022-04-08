<template>
  <div class="ui-block grid-cell" :class="blockClass" :style="marginStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import {
  blockVariant,
  blockVerticalPosition,
  blockHorizontalPosition,
  ButtonMargin,
} from "~/components/library/ui-block/ui-block.interface"

// Set "grid-container" class to the parent
// to enable positioning.

export default defineComponent({
  name: "UiBlock",
  props: {
    variant: {
      type: String,
      required: true,
    },
    verticalPosition: {
      type: String,
      default: "top",
    },
    horizontalPosition: {
      type: String,
      default: "left",
    },
    margin: {
      type: Object,
      default: () => ({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }),
    },
  },
  computed: {
    blockClass(): Record<string, boolean> {
      const variant = {
        "col-span-full": this.variant === blockVariant.fullRow,
        "col-span-full sm-col-span-3 md-col-span-6": this.variant === blockVariant.halfRow,
        "col-span-full sm-col-span-2 md-col-span-4": this.variant === blockVariant.thirdRow,
        "col-span-full sm-col-span-4 md-col-span-8": this.variant === blockVariant.doubleThirdRow,
        "col-span-3": this.variant === blockVariant.fourthRow,
      }

      const horizontalPosition = {
        "ui-block__horizontal--left": this.horizontalPosition === blockHorizontalPosition.left,
        "ui-block__horizontal--center": this.horizontalPosition === blockHorizontalPosition.center,
        "ui-block__horizontal--right": this.horizontalPosition === blockHorizontalPosition.right,
      }

      const verticalPosition = {
        "ui-block__vertical--top": this.verticalPosition === blockVerticalPosition.top,
        "ui-block__vertical--center": this.verticalPosition === blockVerticalPosition.center,
        "ui-block__vertical--bottom": this.verticalPosition === blockVerticalPosition.bottom,
      }

      return Object.assign(variant, horizontalPosition, verticalPosition)
    },

    marginStyle(): Record<string, string> {
      const margin = this.margin as ButtonMargin
      return {
        marginTop: `${margin.top || 0}px`,
        marginLeft: `${margin.left || 0}px`,
        marginBottom: `${margin.bottom || 0}px`,
        marginRight: `${margin.right || 0}px`,
      }
    },
  },
})
</script>

<style scoped lang="scss">
.ui-block {
  display: flex;

  &__horizontal {
    &--left {
      justify-content: flex-start;
    }

    &--center {
      justify-content: center;
    }

    &--right {
      justify-content: flex-end;
    }
  }

  &__vertical {
    &--top {
      align-items: flex-start;
    }

    &--center {
      align-items: center;
    }

    &--bottom {
      align-items: flex-end;
    }
  }
}
</style>
