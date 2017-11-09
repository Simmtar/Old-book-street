<template>

	<div id="bigbox">
		<transition  name="anibook" >
			<div id="route">
				<div id="bookfd">
					<header>
						<ul>
							<li>
								<router-link :to="{name:'bookfd1'}" class="a">
									最新注册
								</router-link>
							</li>
							<li >
								<router-link :to="{name:'bookfd2'}" class="a">
									最多关注
								</router-link>
							</li>
							<li>
								<router-link :to="{name:'bookfd3'}" class="a">
									最多出售
								</router-link>
							</li>
						</ul>
					</header>
					<section>
						<router-view></router-view>
					</section>
				</div>
			</div>
		</transition>
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
						<i><img src="../img/user_list_active.png" alt=""></i>
						<b ref="col">书友</b>
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
			
		}
	},
	components:{

	},
	mounted(){
		this.$refs.col.style.color = "#00c7b4";
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