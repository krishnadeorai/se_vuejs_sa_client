/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'

import router from '../router'
import store from '../store'
import App from '../app'

// import ProductsList from '../components/productsList.vue'
// import Details from '../components/details.vue'
// import Router from 'vue-router'
// import Vuex from 'vuex'
// import Axios from 'axios'
//import VueFlexboxgrid from 'vue-flexboxgrid'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
 
//Vue.use(VueFlexboxgrid)
//Vue.use(BootstrapVue);
//Vue.use(Router)
//Vue.use(Vuex)
//turbolinks:load
Vue.config.productionTip = false
document.addEventListener('DOMContentLoaded', () => {
	//Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  document.body.appendChild(document.createElement('app'))
  //var element = document.getElementById('products_list')
  const app = new Vue({
  	router,
  	store,
    render: h => h(App)
  }).$mount('app')

  // const details = new Vue({
  //   render: h => h(Details)
  // }).$mount('details')

  //console.log(productsList)
});

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
