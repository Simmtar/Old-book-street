<template>
<!-- <transition  name="anibook" > -->
	<div id="bigbox">
		<div id="route">
			<div id="my">
				<header>
					<div id="img"><img src="../img/shopp.jpg" alt=""></div>
					<dl>
						<dt>
							<img src="../img/shopl.jpg" alt="">
							<span>书倪</span>
						</dt>
						<dd>中南财经政法大学<dd>
						<dd>
							<i><img src="../img/shopmon.jpg" alt=""> <span>0.00</span></i>
							<i><img src="../img/shopji.jpg" alt=""> <span ref="jifen">5</span></i>
						</dd>
					</dl>
					<div id="infor" @click="dao()" ref="yiqd">签到</div>
				</header>
				<section>
					<ul id="m1">
						<li class="active" @click="shopcar()">
							<i>
								<img src="../img/cart.png" alt="">
							</i>
							<b>购物车 <span>(0)</span></b>
						</li>
						<li class="active">
							<i>
								<img src="../img/order_sell.png" alt="">
							</i>
							<b>收到的订单<span>(0)</span></b>
						</li>
						<li class="active">
							<i>
								<img src="../img/order_buy.png" alt="">
							</i>
							<b>我下的订单<span>(0)</span></b>
						</li>
					</ul>
					<ul id="m2">
						<li><img src="../img/sell.png" alt="">出售<span>(0)</span><img class="rig" src="../img/right.png"/></li>
						<li><img src="../img/sell_comment.png" alt="">留言<span>(0)</span><img class="rig" src="../img/right.png"/></li>
					</ul>
					<ul id="m2">
						<li><img src="../img/fan.png" alt="">粉丝<span>(0)</span><img class="rig" src="../img/right.png"/></li>
						<li><img src="../img/follow.png" alt="">关注<span>(0)</span><img class="rig" src="../img/right.png"/></li>
					</ul>
					<ul id="m2">
						<li><img src="../img/app_recommend.png" alt="">猜您喜欢<img class="rig" src="../img/right.png"/></li>
						
					</ul>
					<ul id="m2">
						<li><img src="../img/setting.png" alt="">设置<img class="rig" src="../img/right.png"/></li>
						
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
						<i><img src="../img/message.png" alt=""></i>
						<b>消息</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my'}" class="a">
						<i><img src="../img/user_active.png" alt=""></i>
						<b ref="col">我的</b>
					</router-link>
				</li>
			</ul>
		</footer>
	</div>
<!-- </transition> -->
</template>
<script type="text/javascript">
import footer from '../components/footer.vue';

export default{
	data(){
		return {
			

		}
	},
	methods:{
		dao:function(){
			var fen = parseInt(this.$refs.jifen.innerHTML);
			var count = fen + 5;
			this.$refs.jifen.innerHTML= count;
			this.$refs.yiqd.innerHTML = "已签到";
		},
		shopcar:function(){
			this.$router.push('./shopCar');
		}
		
	},
	components:{
		'v-footer':footer

	},
	mounted(){
		this.$refs.col.style.color = "#00c7b4";
		var str=localStorage.getItem("userIfo");
		console.log(str);
		if(!str){
			this.$router.push('./login');
		}else{
			this.$router.push('./my');
		}
		
	}
}
</script>
<style type="text/css">
	.anibook-enter-active {
	  animation: fadeInRight  .4s;

	}
	.anibook-leave-active {
	  animation: fadeOutRight .4s;
	}
</style>