<template>
<transition  name="anilog" >
	<div id="bigboxlogin">
		
		<div id="route">
			<div id="login">
				<header>
					<img src="" alt="">
					请登录
				</header>
				<section>
					<ul>
						<li><input type="text" placeholder="用户名:" ref="username"></li>
						<li><input type="text" placeholder="密码:" ref="pw"></li>
					</ul>


					<div id="m4"><button @click="login()">登录</button></div>
					<div id="m5">
						<span @click="toreg()">注册新用户</span>
						<span>忘记密码？</span>
					</div>
				</section>
				<div v-if="isok1" id="isok">登陆成功!</div>
				<div v-if="isok2" id="isok">密码错误!</div>
				<div v-if="isok3" id="isok">用户名不存在，请注册！</div>
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
			isok1:false,
			isok2:false,
			isok3:false
		}
	},
	methods:{
		toreg:function(){
			this.$router.push('/register');
		},
		login:function(){
			var user = this.$refs.username.value;
			var pw = this.$refs.pw.value;

			var str=localStorage.getItem("userIfo");
			var arr = eval(str);
			if(str){
				if(arr[0].username == user){
					if(arr[0].password == pw){
						this.isok1 = !this.isok1;
						setTimeout(function(){
							this.isok1 = false;
							this.$router.push('/my');
						}.bind(this),1000)
					}else{
						this.isok2 = !this.isok2;
						setTimeout(function(){
							this.isok2 = false;
						}.bind(this),1000)
					}
				}else{
					this.isok3 = !this.isok3;
					setTimeout(function(){
						this.isok3 = false;
					}.bind(this),1000)
				}
			}else{
				this.isok3 = !this.isok3;
					setTimeout(function(){
						this.isok3 = false;
					}.bind(this),1000)
			}
			
		}
	},
	components:{

	},
	mounted(){
		
	}
}
</script>
<style type="text/css">
	.anilog-enter-active {
	  animation: fadeIn 1s;

	}
	.anilog-leave-active {
	  animation: fadeOut 1s;
	}
</style>