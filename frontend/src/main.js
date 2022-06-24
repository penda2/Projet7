import Vue from 'vue'
import {createApp, VueElement} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
/*
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faHouse);
Vue.component('font-awesome-icon', FontAwesomeIcon);
*/
createApp(App).use(store).use(router).use(axios).mount('#app')
 