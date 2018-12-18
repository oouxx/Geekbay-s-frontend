// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
//全局状态控制引入
import store from './store/store'
//全局加载resource拦截器
import './axios/'
import Axios from 'axios'
Vue.prototype.$http = Axios
// 使用elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css'

import 'vue-git-comment/dist/vue-git-comment.css';
import VueGitComment from 'vue-git-comment';
Vue.use(VueGitComment); 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
