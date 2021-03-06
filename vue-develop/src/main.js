import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Standings from './components/Standings.vue'
import PlayerScore from './components/PlayerScore.vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: '/', component: Standings },
  { path: '/standings', component: Standings },
  { path: '/playerScore', component: PlayerScore },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
