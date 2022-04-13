import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
{{#if_eq thirdParty "element-ui"}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
{{/if_eq}}
{{#if_eq thirdParty "ant-design-vue"}}
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
{{/if_eq}}
import http from "./libs/http"
import Vant from 'vant';
import 'vant/lib/index.css';
import "./base/base.css"
import Vconsole from 'vconsole'
let vConsole = new Vconsole()
Vue.use(vConsole)
Vue.use(Vant);
Vue.use(http);
Vue.config.productionTip = false

new Vue({
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  http,
  Vant,
  {{/vuex}}
  render: h => h(App)
}).$mount('#app')
