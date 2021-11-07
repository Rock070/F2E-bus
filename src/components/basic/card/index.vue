<template lang="pug">
.container(
  :class="tw(\
    'mx-auto',\
    TYPE_STYLE,\
  )"
)
  slot
</template>
<script>
import { computed } from 'vue'
import { css, apply } from 'twind/css'
export default {
  props: {
    type: {
      type: String,
      default: 'lv1'
    }
  },
  setup (props) {
    const typeStyle = {
      lv1: apply`bg-gray`,
      lv2: apply`bg-black`
    }

    const TYPE_STYLE = computed(() => css(typeStyle[props.type]))

    return {
      TYPE_STYLE
    }
  }
}
</script>
