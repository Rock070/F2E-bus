<template lang="pug">
div(
  :class="tw(\
    'bg-white',\
    'min-h-screen',\
    'min-w-screen',\
  )"
)
  router-view
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
