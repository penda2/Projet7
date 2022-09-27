import Vue from 'vue'
import {createApp, VueElement} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import "../node_modules/@fortawesome/free-regular-svg-icons"
createApp(App).use(store).use(router).use(axios).mount("#app");
 