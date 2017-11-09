<template>
	<footer>
		<ul>
			<li class="active">
				<router-link :to="{name:'home'}" class="a">
					<i><img src="../img/home_active.png" alt=""></i>
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
					<i><img src="../img/user.png" alt=""></i>
					<b>我的</b>
				</router-link>
			</li>
		</ul>
	</footer>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {

		}
	}
}
	
</script>