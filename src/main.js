import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;

Vue.use(VueLazyload)

Vue.prototype.key = "ba72ec113be94bc390315f3d89a7a913";

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
	mounted() {
		if (localStorage.getItem('list') == null) {
			return localStorage.setItem('list', JSON.stringify([]));
		}
	}
})
