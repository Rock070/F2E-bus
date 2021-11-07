<template lang="pug">
TwHeader
.home
  TwTitle(text="熱門城市")
</template>

<script>
import TourismService from '@/services/TourismService'
import { ALL_CITY } from '@/configs/site'
export default {
  setup () {
    
    TourismService.getCitySpot({
      body: {
        city: 'Taipei'
      }
    })
    // const {PictureUrl1, PictureDescription1} = res.Picture
    // Picture.PictureUrl1 ,PictureDescription1
      .then(res => console.log(res))
    // TourismService.getAllSpot({
    //   body: {
    //     $top: 30
    //   }
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => console.log(err))
    // console.log(ALL_CITY)

    return {
      ALL_CITY
    }
  }
}
</script>
