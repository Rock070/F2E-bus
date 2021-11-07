<template lang="pug">
div(
  :class="tw(\
    'mt-4',\
    'flex', 'justify-center',\
  )"
)
div(:class="tw('flex', 'justify-around')")
  div 景點活動
  div 美食住宿
  div 景點交通
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  },
  setup () {
    return {
    }
  }
}
</script>
