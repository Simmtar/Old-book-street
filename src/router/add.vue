<template>
<transition  name="anibook" >
<div id="bigboxadd">
	<div id="route">
		<div id="add">
			<header>
				<!-- <router-link :to="{name:'home'}"> -->
					<img src="../img/return.jpg" alt="" @click="retu()"/>
				<!-- </router-link>		 -->
				<span>出售书籍</span>
			</header>
			<section>
				<div id="m1">
					ISBN: <input type="text" placeholder="请直接输入或点击右侧图标扫描">
					
					<img src="../img/scan.png" alt="">
				</div>

				<div id="m2">
					<div>
						<div>
							
						</div>
					</div>
					<ul>
						<li><input type="text" placeholder="书名"></li>
						<li><input type="text" placeholder="作者"></li>
						<li><input type="text" placeholder="出版社"></li>
						<li><input type="text" placeholder="原价" id="four"></li>
					</ul>
				</div>
				<ul id="m3">
					<li><input type="text" value="出售价："></li>
					<li><input type="text" value="数量："></li>
					<li><input type="text" value="分类："></li>
					<li><input type="text" value="新旧："></li>
					<li><input type="text" value="备注："></li>
				</ul>
				<div id="m4"><button>发布</button></div>
			</section>
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

		}
	},
	methods:{
		retu:function(e){
			if(confirm('确定返回？')){
		      this.$router.push('./index.html');
		    }else{
		      e.preventDefault();
		    }
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




