import { createApp } from 'vue'
import App from '@/pages/body-content'
import router from './router'
import { Store } from './store'
import Basic from '@/components/basic/install'
import { setup, tw } from 'twind'
import customTheme from './plugins/theme'

setup({
  theme: customTheme,
})
const app = createApp(App)
app.config.globalProperties.tw = tw
app.use(Basic)
app.use(Store)
app.use(router)
app.mount('#app')

Store.dispatch('site/setTheme', customTheme)
