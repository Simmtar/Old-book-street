<template>
<transition  name="anireg" >
	<div id="bigboxregister">
		
			<div id="route">
				<div id="register">
					<header>
						<img src="" alt="">
						注册
					</header>
					<section>
						<ul>
							<li><input type="text" placeholder="中国(+86)"></li>
							<li><input type="text" placeholder="手机号"  ref="username"></li>
							<li><input type="text" placeholder="短信验证码:"></li>
							<li><input type="text" placeholder="密码，最少6位"  ref="pw"></li>
						</ul>

					</section>
					<footer>
						<button @click="tologin()">返回</button>
						<button @click="register()">注册</button>
					</footer>
					<div v-if="isok1" id="isok">注册成功，请登录！</div>
				</div>
			</div>
		
	</div>
</transition>
</template>
<script type="text/javascript">
	
import footer from '../components/footer.vue';

export default{
	data(){
		return {
			isok1:false
		}
	},
	methods:{
		tologin:function(){
			this.$router.push('/login');
		},
		register:function(){
			var user = this.$refs.username.value;
			var pw = this.$refs.pw.value;
	
			localStorage.setItem('userIfo','[{"username":'+ user + ',"password":' + pw +' }]');

			this.isok1=true;
			setTimeout(function(){
				this.isok1 = false;
				this.$router.push('/login');
			}.bind(this),1000)
		}
			
	},
	components:{

	},
	mounted(){
		
	}
}
</script>
<style type="text/css">
	.anireg-enter-active {
	  animation: fadeInRight  1s;

	}
	.anireg-leave-active {
	  animation: fadeOutRight 1s;
	}
</style>