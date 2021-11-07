import TwHeader from './header'
import TwTitle from './titles'
import TwContainer from './container'
import TwCard from './card'

export default (app) => {
  app.component('TwHeader', TwHeader)
  app.component('TwTitle', TwTitle)
  app.component('TwContainer', TwContainer)
  app.component('TwCard', TwCard)
}
