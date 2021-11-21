<template lang="pug">
.tab(
  :class="tw(\
    'relative inline-block',\
    'h-10',\
    css({ minWidth: '15%' }),\
  )"
)
  .border(
    :class="tw(\
      'inline-block',\
      'border border-blue',\
      'px-6px',\
      'my-auto',\
      'flex items-center justify-center',\
      'text(blue)',\
      'min-h-10',\
      'w-full',\
      WRAP_STYLE,\
    )"
  )
  .text(
    :class="tw(\
      'text-sm',\
      'filter-none',\
      'absolute',\
      'top-50% left-50%',\
      '-translate-x-50%',\
      '-translate-y-50%',\
    )"
  )
    slot

</template>

<script>

import { css } from 'twind/css'
import { computed } from 'vue'
import { Store } from '@/store'

export default {
  name: 'input',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  setup () {
    const theme = computed(() => Store.state.site.theme)
    console.log(theme.value)
    const WRAP_STYLE = css({
      // minWidth: '15%',
      filter: `drop-shadow(0px 0px 6px ${theme.value.colors.blue_light}) drop-shadow(0px 0px 2px ${theme.value.colors.blue_light})`,
    })
    return {
      css,
      WRAP_STYLE,
    }
  },
}
</script>
