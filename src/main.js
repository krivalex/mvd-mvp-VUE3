import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.css'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { farFaBookmark } from '@fortawesome/free-regular-svg-icons'

// library.add(faUserSecret, farFaBookmark)
library.add(faUserSecret)

const app = createApp(App)

app.use(router).mount('#app')
