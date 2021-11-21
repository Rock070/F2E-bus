<template lang="pug">
div(
  :class="tw(\
    'bg-gray',\
    'w-full',\
    'h-full',\
    css({ padding: '8.5px 12px 8.5px 16px'}),\
  )"
)
  input(
    :class="tw(\
      'bg-gray',\
      'outline-none',\
      'text-blue',\
      INPUT_STYLE,\
    )"
    :placeholder="placeholder"
    @input="$emit('update:inputValue', $event.target.value)"
  )

</template>

<script>

import { css, theme } from 'twind/css'

export default {
  name: 'input',
  props: {
    inputValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['update:inputValue'],
  setup () {
    const INPUT_STYLE = css({
      '&::placeholder': {
        color: theme('colors.gray_light'),
      },
    })
    return {
      css,
      INPUT_STYLE,
    }
  },
}
</script>
