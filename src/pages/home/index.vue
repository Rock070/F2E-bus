<template lang="pug">
TwContainer(
  :class="tw(\
    'bg-black',\
    'min-h-screen',\
  )"
)
  img(src="@/assets/logo.png")
</template>

<script>
import TourismService from '@/services/TourismService'
import { ALL_CITYS } from '@/configs/site'
import { css } from 'twind/css'

export default {
  setup () {
    return {
      css,
      ALL_CITYS
    }
  }
}
</script>
