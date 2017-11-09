<template>
<transition :enter-active-class = "anienter" :leave-active-class = "anileave">
	<div id="detailbox">
		<div id="route" ref="scrol">
			<div id="detail">
				<header>
					<img src="../img/return.jpg" alt="" @click="ret()"/>
					<span>出售详情</span>
					<img src="../img/zhuan.jpg" alt="" id="zhuan" onclink="share()">
				</header>
				<section v-for="(i,index) in list" :key="index">
					<div id="d1">
						<img :src='i.img' alt="">
					</div>
					<div id="d2">
						<dl>
							<dt>{{i.title}}</dt>
							<dd>458692343463</dd>
							<dd>{{i.author}} <span>{{i.exit}}</span></dd>
							<dd id="sec">¥{{i.price}} <span>¥35.00</span></dd>
							<dd id="thr">
								<ul id="today">
									<li><img src="../img/date.png" alt="">昨天</li>
									<li><img src="../img/comment.png" alt="">9成</li>
									<li><img src="../img/quality.png" alt="">一本</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div id="d3">
						<img src="" alt="">
						<span>请不要使用旧书街担保之外的交易方式</span>
						<a href="">交易流程说明</a>
					</div>
					<div id="d4"> 
						<ul>
							<li>
								<div id="d4img"><img :src="i.photo" alt="" /></div>
							</li>
							<li id="sec">
								<ul>
									<li id="d4tit">
										<dl >
											<dt><img src="../img/p2.jpg" alt="" id="ph">{{i.person}}</dt>
											<dd>{{i.school}}</dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt>2222</dt>
											<dd>出售</dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt>9</dt>
											<dd>粉丝</dd>
										</dl>
									</li>
								</ul>
								<div>{{i.word}}</div>
								<div id="focus">
									<a>加关注</a>
									<a>查看</a>
								</div>
							</li>
						</ul>
					</div>
					<div id="d5">
						<p><span>最近来访</span></p>
						<div>暂无访问</div>
					</div>
					<div id="d5">
						<p><span>留言</span></p>
						<div>暂无留言</div>
					</div>
					<transition enter-active-class="animated bounceInUp" leave-active-class="animated fadeOutDown">
						<div v-if="isok3" class="adds">
							恭喜您，书籍已添加至购物车
						</div>
					</transition>
					
				</section>
			</div>
		</div>
		<footer ref="foot">
			<ul>
				<li class="active">
					<router-link :to="{name:'detail'}" class="a">
						<i><img src="../img/buy_comment.png" alt=""></i>
						<b>留言</b>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'detail'}" class="a">
						<i><img src="../img/message.png" alt=""></i>
						<b>发消息</b>
					</router-link>
					
				</li>
				<li>
					<a class="a" @click="toshop()">
						<i><img src="../img/cart.png" alt=""></i>
						<b>购物车</b>
					</a>
				</li>
				<li @click="addSC()">
					<router-link :to="{name:'detail'}" class="a">
						<b>加入购物车</b>
					</router-link>
				</li>
				
			</ul>
			<div id="carNum" v-if="isokNum" ref="number">1</div>
		</footer>
	</div>
</transition>
</template>
<script type="text/javascript">
var path="";
export default{
	data(){
		return {
			list:[],
			did:this.$route.params.did,
			img:'',
			isok:true,
			isok3:false,
			isokNum:false,
			path:path,
			anileave:'animated fadeOutRight',
			anienter:'animated slideInRight'
		}
	},
	methods:{
		ret:function(){
			this.$router.push({path:this.path 
				+"?ani=fadeInLeft"});
		},
		addSC:function(){
			this.isok3 = true;
			setTimeout(function(){
				this.isok3 = false;
			}.bind(this),2000)

            //加入购物车

			localStorage.setItem("goods",'[{"g-id":'+ this.list[0].id +',"bookname":'+ this.list[0].title+',"num":1}]}]');


			
		},
		toshop:function(){
			// console.log(111);
			this.anileave ='animated fadeOutLeft';
			this.$router.push('/shopCar');
			
		}
		
	},
	beforeRouteEnter(to,from,next){
    	path = from.fullPath;
    	next(vm=>{
        })
    },
	components:{

	},
	mounted(){
		// console.log(this.$route.params.img);
		this.img = this.$route.params.img;
		// console.log(this.$route.params.did%3);
		this.$refs.scrol.style.height = document.documentElement.clientHeight-this.$refs.foot.clientHeight +"px";

		
		this.$http.get('./src/json/book.json').then(function(data){
	  		this.list = this.list.concat(data.body.book[this.$route.params.did]);
	  		
	  	}.bind(this),function(err){
	  		console.log(err)
	  	})
	  	///////////////////////////购物车
		var str=localStorage.getItem("goods");
		// var arr = eval(str);
		if(str){
			// this.$refs.number.innerHTML = "6";
			console.log(this.$refs.number);
			this.isokNum = !this.isokNum;

		}else{
			console.log(122);
		}

	},
	updated(){
		this.anileave ='animated fadeOutLeft';
		console.log(this.anileave);
	}	

		

}

</script>

<style type="text/css">
	
</style>