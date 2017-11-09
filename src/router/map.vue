<template>
<transition name="animap">
	<div id="map">
		<header ref="heightH">
			<div id="school">
				<router-link :to="{name:'home'}" class="a">
					<img src="../img/return.jpg" alt="" />
				</router-link>
			</div>
			<input type="text" value="请输入学校名称搜索" />
		</header>
		<section ref="heightS">
			<ul id="zuo" class="all">
				<router-link :to="{name:'mapschool', params:{mid:i.id}}"  class="a" v-for="(i,index) in city" :key="i.id">
					<li @click='abc(index,$event)' v-bind:class='{active:index==qwerqwre}'>{{i.city}}</li>
				</router-link>
			</ul>
			
			<router-view></router-view>
			
			<div>
				
			</div>
		</section>
	</div>
</transition>
</template>



<script type="text/javascript">
	


export default{
	data(){
		return {
			city:[],
			mid: 2,
			qwerqwre:"0" 
		}
	},
	methods:{
		abc:function(index,e){
			this.qwerqwre = index;
		}
	},
	components:{
		
	},
	mounted(){
		// 获取高度
		this.$refs.heightS .style.height = document.documentElement.clientHeight - this.$refs.heightH.style.height + "px";
		// 拿到json数据
		this.$http.get('./src/json/city.json').then(function(data){
	  		this.city = this.city.concat(data.data[0].city);
	  	},function(err){
	  		console.log(err)
	  	});
		// console.log(this.$route.params.mid);
	},
	updated(){
	}
}
</script>
<style type="text/css">
	.animap-enter-active {
	  animation: fadeInRight  1s;

	}
	.animap-leave-active {
	  animation: fadeOutRight 1s;
	}
</style>