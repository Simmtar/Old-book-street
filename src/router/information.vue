<template>
	<div id="bigbox">
		<div id="route">
			<div id="information">
				<header>消息</header>
				<section>
					<ul>
						<li v-for="(i,index) in list" :key="index" ref="linb">
							<img :src="i.photo" alt=""/>
							<dl id="cont">
								<dt>{{i.person}}</dt>
								<dd>{{i.information}}</dd>
							</dl>
							<dl id="date">
								<dt>2017-07-24</dt>
								<dd><img src="../img/remove.jpg" alt="" @click="remove(index)"></dd>
							</dl>
						</li>
					</ul>
				</section>
			</div>
		</div>
		<footer ref="foot">
			<ul>
				<li class="active">
					<router-link :to="{name:'home'}" class="a">
						<i><img src="../img/home.png" alt=""></i>
						<b>首页</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'bookfd'}" class="a">
						<i><img src="../img/user_list.png" alt=""></i>
						<b>书友</b>
					</router-link>
					
				</li>
				<li>
					<router-link :to="{name:'add'}" class="a">
						<i><img src="../img/add.png" alt=""></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'information'}" class="a">
						<i><img src="../img/message_active.png" alt=""></i>
						<b ref="col">消息</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my'}" class="a">
						<i><img src="../img/user.png" alt=""></i>
						<b>我的</b>
					</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>
<script type="text/javascript">
import footer from '../components/footer.vue';

export default{
	data(){
		return {
			list:[]

		}
	},
	methods:{
		remove:function(index){
			this.$refs.linb[index].remove();
		}
	},
	components:{

	},
	mounted(){
		this.$refs.col.style.color = "#00c7b4";
		this.$http.get('./src/json/book.json').then(function(data){
	  		this.list = this.list.concat(data.body.sell);
	  	}.bind(this),function(err){
	  		console.log(err)
	  	})
	}
}
</script>
<style type="text/css">
	.anifor-enter-active {
	  animation: fadeInLeft  .4s;

	}
	.anifor-leave-active {
	  animation: fadeOutLeft .4s;
	}
</style>