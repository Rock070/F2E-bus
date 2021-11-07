<template lang="pug">
.container(
  :class="tw(\
    'mx-auto', 'bg-white',\
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
      lv1: apply`p-10px`,
      lv2: css({
        padding: '5.5px 7.07px 5.5px 6.28px'
      }),
      lv3: apply`p-3`
    }

    const TYPE_STYLE = computed(() => css(typeStyle[props.type]))

    return {
      TYPE_STYLE
    }
  }
}
</script>
