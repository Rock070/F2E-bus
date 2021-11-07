<template lang="pug">
div(
  :class="tw(\
    'border-blue',\
    WRAP_STYLE,\
  )"
)

</template>

<script>

import { css, theme } from 'twind/css'

export default {
  name: 'input',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  setup () {
    const WRAP_STYLE = css({
      filter: `drop-shadow(0px 0px 6px ${theme('colors.blue')}) drop-shadow(0px 0px 2px #1CC8EE)`
    })
    return {
      css,
      WRAP_STYLE
    }
  }
}
</script>
