<template>
<transition name="anicar">
	<div id="shopbox">
		<div id="route" ref="scrol">
			<div id="carbox">
				<header>
					<img src="../img/return.jpg" alt="" @click= "ret()"/>
					<span>购物车</span>
					<div>订单记录</div>
				</header>
				<section>
					<ul id="tushu" ref="tushu">
						<li class="li">
							<b>
								<img src="../img/p1.jpg" alt="">
								<div>
									<img src="../img/p2.jpg" alt="">人名
									<p>山东大学</p>
								</div>
								
							</b>
							<div id="book1">
								<i @click="selected()"><span v-if="isok">√</span></i>
								<div><img src="../img/b3.jpg" alt=""></div>
								<dl>
									<dt>我的阿勒泰</dt>
									<dd>￥<span>10.10</span>1本</dd>
								</dl>
								<img src="../img/remove.jpg" alt="" class="remv">
							</div>
						</li>
						<li class="li">
							<b>
								<img src="../img/p1.jpg" alt="">
								<div>
									<img src="../img/p2.jpg" alt="">人名
									<p>山东大学</p>
								</div>
								
							</b>
							<div id="book1">
								<i></i>
								<div><img src="../img/b3.jpg" alt=""></div>
								<dl>
									<dt>我的阿勒泰</dt>
									<dd>￥<span>10.10</span>1本</dd>
								</dl>
								<img src="../img/remove.jpg" alt="" class="remv">
							</div>
						</li>
						<li class="li">
							<b>
								<img src="../img/p1.jpg" alt="">
								<div>
									<img src="../img/p2.jpg" alt="">人名
									<p>山东大学</p>
								</div>
								
							</b>
							<div id="book1">
								<i></i>
								<div><img src="../img/b3.jpg" alt=""></div>
								<dl>
									<dt>我的阿勒泰</dt>
									<dd>￥<span>10.10</span>1本</dd>
								</dl>
								<img src="../img/remove.jpg" alt="" class="remv">
							</div>
						</li>
					</ul>
				</section>
				
			</div>
		</div>
		<footer>
			<ul>
				<li>合计：￥<span>0.00</span></li>
				<li>去结算(<span>0</span>)</li>
			</ul>	
		</footer>
	</div>
</transition>
</template>
<script type="text/javascript">

export default{
	data(){
		return {
			isok:false
		}
	},
	methods:{
		ret:function(){
			this.$router.push('/home');
		},
		selected:function(){

			this.isok = !this.isok;
		}
	},
	components:{

	},
	mounted(){
	
	},
	updated(){
		// if()
	}
}
</script>

<style type="text/css">
	.anicar-enter-active {
	  animation: fadeInRight  1s;

	}
	.anicar-leave-active {
	  animation: fadeOutRight 1s;
	}
</style>