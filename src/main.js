import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  }
})

const app = createApp(App)

app.use(router).use(store).use(vuetify)

app.mount('#app')
