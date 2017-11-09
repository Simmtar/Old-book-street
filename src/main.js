import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

require('./style/index.scss');

Vue.use(VueResource);
import Home from './router/home.vue';
import bookfd from './router/bookfd.vue';
import add from './router/add.vue';
import map from './router/map.vue';
import my from './router/my.vue';
import information from './router/information.vue';
import fenlei from './router/fenlei.vue';
import detail from './router/detail.vue';
import shopCar from './router/shopCar.vue';
import login from './router/login.vue';
import register from './router/register.vue';


import bookfd1 from './components/bookfd1.vue';
import bookfd2 from './components/bookfd2.vue';
import bookfd3 from './components/bookfd3.vue';
import mapschool from './components/mapschool.vue';
import fenList from './components/fenList.vue';
import select from './components/select.vue';


import App from './App.vue'

const router = new VueRouter({
	routes:[
		{
			path:'/home',
			name:'home',
			component: Home
		},
		{
			path:'/bookfd',
			name:'bookfd',
			component:bookfd,
			'children':[
				{
					path:'bookfd1',
					name:'bookfd1',
					component:bookfd1
				},
				{
					path:'bookfd2',
					name:'bookfd2',
					component:bookfd2
				},
				{
					path:'bookfd3',
					name:'bookfd3',
					component:bookfd3
				},
				{
					path:'',
					component:bookfd1
				}
			]
		},
		{
			path:'/add',
			name:'add',
			component:add
		},
		{
			path:'/my',
			name:'my',
			component:my
		},
		{
			path:'/information',
			name:'information',
			component:information
		},
		{
			path:'/map',
			name:'map',
			component:map,
			'children':[
				{
					path:'mapschool/:mid',
					name:'mapschool',
					component:mapschool
				},
				{
					path:'mapschool/0',
					name:'mapschool',
					component:mapschool
				}

			]
		},
		{
			path:'/fenlei',
			name:'fenlei',
			component:fenlei,
			'children':[
				/*{
					path:'fenList/:fid',
					name:'fenList',
					component:fenList
				},*/
				/*{
					path:'',
					name:'fenList',
					component:fenList
				},*/
				{
					path:'select',
					name:'select',
					component:select
				}
			]
		},
		{
			path:'/detail/:did',
			name:'detail',
			component:detail
		},
		{
			path:'/shopCar',
			name:'shopCar',
			component:shopCar
		},
		{
			path:'/login',
			name:'login',
			component:login
		},
		{
			path:'/register',
			name:'register',
			component:register
		},
		{
			path:'*',
			redirect:'/home'
		}
	]
})

new Vue({
  el: '#app',
  data(){
  	return {
  		// list:['1']
  	}
  },
  router:router,
  methods:{
  	
  },
  mounted:function(){

  	},
  
  render: h => h(App)
})
