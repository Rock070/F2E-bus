<template lang="pug">
TwContainer(
  :class="tw(\
    'bg-black',\
    'min-h-screen',\
    'pt-18px',\
    'text-white',\
  )"
)
  div(:class="tw('flex')")
    img(
      src="@/assets/logo.png"
      :class="tw('mr-30px')"
    )
    TwInput(
      placeholder="選擇路線或手動輸入關鍵字"
      v-model:inputValue="submitData.search"
    )
  TwCard(
    type="lv2"
    :class="tw('p-5')"
  )
    TwTab(
      :class="tw('')"
    )
    div 123
</template>

<script>
import TourismService from '@/services/TourismService'
import { ALL_CITYS } from '@/configs/site'
import { css } from 'twind/css'
import { reactive } from 'vue'

export default {
  setup () {
    const submitData = reactive({
      search: ''
    })

    return {
      submitData,
      css,
      ALL_CITYS
    }
  }
}
</script>
