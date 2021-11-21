<template lang="pug">
div(
  :class="tw(\
    'bg-white',\
    'min-h-screen',\
    'w-full',\
    'box-border'\
  )"
)
  router-view
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
}
</script>
