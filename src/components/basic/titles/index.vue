<template lang="pug">
div(:class="tw('flex')")
  img(src="")
  div {{text}}
</template>

<script>
export default {
  name: 'titles',
  props: {
    type: {
      type: String,
      default: 'triangle',
      validator: (val) => ['triangle', 'rectangle'].includes(val)
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {
    }
  }
}
</script>
