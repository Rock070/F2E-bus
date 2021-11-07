import { ALL_CITYS } from './site.js'
import TourismService from '../services/TourismService'

console.log('test')

const getCityImgUrl = async () => {
  const obj = {}
  const ALL_CITYS = ['Taipei', 'NewTaipei']
  await ALL_CITYS.forEach(async (city) => {
    await TourismService.getCitySpot({
      path: {
        city: city.id
      },
      params: {
        $top: 210
      }
    })
      .then(res => {
        let result = null
        for (let i = 0; i < 210; i += 1) {
          const { PictureUrl1, PictureDescription1 } = res[i].Picture
          if (PictureUrl1) {
            result = { PictureUrl1, PictureDescription1 }
            break
          }
        }
        obj.push({
          id: city.id,
          label: city.id,
          ...result
        })
        console.log(obj)
        // if (index === ALL_CITYS.length - 1) console.log(obj)
      })
  })
}

getCityImgUrl()
