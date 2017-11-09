<template>
<transition  name="anihome" >
	<div id="bigbox">
		<div id="route">
			<div id="main" class="outerScroller">
				<header ref="head">
					<ul>
						<li @click = "mapTo()">
							<!-- <router-link :to="{name:'map'}" class="a"> -->
							<a class="a">
								<img src="../img/map.jpg" alt="">
								</a>
							<!-- </router-link> -->
						</li>
						<li>
							<input type="text" class="iconfont icon-sousuo" value="请输入书名/作者/书友/ISBN" @click="sousuo()"/>
						</li>
					</ul>
				</header>
				<section ref="sec" class="scroll">
					<div class="refresh">
						<p class="frep">松开刷新...</p>
						<p>最后更新: <span class="time"></span></p>
					</div>
					<div class="swiper-container" id="lunb">
					    <div class="swiper-wrapper">
					        <div class="swiper-slide" v-for="i in swiper"><img :src="i.img" alt=""></div>
					    </div>
    					<div class="swiper-pagination"></div><!--分页器-->
					</div>
					<div id="fenlei">
						<ul >
							<li v-for="i in listfen">
								<router-link :to="{name:'fenlei'}" class="a">
									<i><img :src="i.img" alt=""></i>
									<span>{{i.title}}</span>
								</router-link>
									
							</li>
						</ul>
					</div>
					<ul id="goodb">
						<li>
							<p>好书推荐 <span>更多></span></p>
							<ul>
								<li v-for="item in listbook">
									<router-link :to="{name:'detail', params:{did:item.id}}" class="a"><img :src="item.img" alt=""/></router-link> 
								</li>
							</ul>
						</li>
						<li>
							<p>特惠专场 <span>更多></span></p>
							<ul>
								<li v-for="item in listbook">
									<router-link :to="{name:'detail', params:{did:item.id}}"><img :src="item.img" alt=""/></router-link> 
								</li>
							</ul>
						</li>
						
					</ul>
					 <ul id="person">
						<li>
							<p>个人出售 <span>更多></span></p>
							<ul>
								<li v-for="i in listsell">
									<router-link :to="{name:'detail', params:{did:i.id}}" class="a"> 
										<b>
											<img src="../img/p1.jpg" alt="">
											<img src="../img/p2.jpg" alt=""> {{i.person}} <span>{{i.school}}</span>
										</b>
										<div id="book1">
											<div><img :src="i.img" alt=""></div>
											<dl>
												<dt>{{i.title}}</dt>
												<dd>{{i.author}} <span>{{i.exit}}</span></dd>
												<dd id="sec">¥{{i.price}} <span>¥{{i.old}}</span></dd>
												<dd id="thr">
													<ul id="today">
														<li><img src="../img/date.png" alt="">今天</li>
														<li><img src="../img/comment.png" alt="">0</li>
														<li><img src="../img/quality.png" alt="">九成新</li>
													</ul>
												</dd>
											</dl>
										</div>
									</router-link>
								</li>
								
					
							</ul>
						</li>
					
					
						<li>
							<p>书店出售 <span>更多></span></p>
							<ul>
								<li v-for="i in listsell">
									<router-link :to="{name:'detail', params:{did:i.id}}" class="a">
										<b>
											<img src="../img/p1.jpg" alt="">
											<img src="../img/p2.jpg" alt=""> {{i.person}} <span>{{i.school}}</span>
										</b>
										<div id="book1">
											<div><img :src="i.img" alt=""></div>
											<dl>
												<dt>{{i.title}}</dt>
												<dd>{{i.author}} <span>{{i.exit}}</span></dd>
												<dd id="sec">¥{{i.price}} <span>¥{{i.old}}</span></dd>
												<dd id="thr">
													<ul id="today">
														<li><img src="../img/date.png" alt="">今天</li>
														<li><img src="../img/comment.png" alt="">0</li>
														<li><img src="../img/quality.png" alt="">九成新</li>
													</ul>
												</dd>
											</dl>
										</div>
									</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>
		</div>
		<footer ref="foot">
			<ul>
				<li class="active">
					<router-link :to="{name:'home'}" class="a">
						<i><img src="../img/home_active.png" alt=""></i>
						<b ref="col">首页</b>
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
</transition>
</template>
<script type="text/javascript">
	
export default{
	data(){
		return {
			listfen:[],
			listbook:[],
			listsell:[],
			swiper:[]
		}
	},
	methods:{
		sousuo:function(){
			this.$router.push('/fenlei');
		},
		mapTo(){
			this.$router.push({path:"/map/mapschool/0"})
		}
	},
	components:{
	},
	mounted(){
		// foot背景色
		this.$refs.col.style.color = "#00c7b4";
		// 滚动部分的高度
		this.$refs.sec.style.height = document.documentElement.clientHeight - this.$refs.head.clientHeight - this.$refs.foot.clientHeight + 47 +"px";
		console.log(this.$refs.sec.style.height);
		// json数据
		this.$http.get('./src/json/book.json').then(function(data){
			console.log(data);
	  		this.listfen = this.listfen.concat(data.body.fenlei);
	  		this.listbook = this.listbook.concat(data.body.book);
	  		this.listsell = this.listsell.concat(data.body.sell);
	  		this.swiper = this.swiper.concat(data.body.swiper);

	  	},function(err){
	  		console.log(err)
	  	})
		// 轮播图
	  	var mySwiper = new Swiper ('.swiper-container', {
		    autoplay:2500,
		    loop:true,
		    // direction: 'vertical',
		    autoplayDisableOnInteraction:false,
		    pagination : '.swiper-pagination',
		    paginationClickable: true,
		    longSwipesRatio: 0.3,
		    touchRatio:1,
		    observer:true,//修改swiper自己或子元素时，自动初始化swiper
		    observeParents:true,//修改swiper的父元素时，自动初始化swiper
		    // freeMode : true,
			// freeModeMomentum : false,
		 });
	},
	updated(){
		   var time = document.querySelector('.time');
		   var date =new Date().toLocaleString();
		   time.innerHTML = date;
		   var ofrep = document.querySelector('.frep');
		   var scroll = document.querySelector('.scroll');
		   var outerScroller = document.querySelector('.outerScroller');
		   var touchStart = 0;
		   var touchDis = 0;
		   // console.log(scroll.pageY);
		   // if(scroll.scrollTop == 0){
	   		outerScroller.addEventListener('touchstart', function(event) { 
		   		ofrep.innerHTML = "松开刷新";
		        var touch = event.targetTouches[0]; 
		        // 把元素放在手指所在的位置 
		           touchStart = touch.clientY; 
		           // console.log(touchStart);
		           // console.log(touchStart);
		        }, false);
		   outerScroller.addEventListener('touchmove', function(event) { 
		        var touch = event.targetTouches[0]; 
		        scroll.style.top = scroll.offsetTop + touch.clientY-touchStart + 'px';
		        console.log(scroll.style.top);
		        scroll.style.height = scroll.offsetHeight +scroll.scrollTop+"px";
		        // console.log(scroll.style.height );

		        touchStart = touch.clientY;
		        touchDis = touch.clientY-touchStart;
		        // console.log(touchDis);
		        }, false);
		   outerScroller.addEventListener('touchend', function(event) { 
		   		ofrep.innerHTML = "下拉刷新";
		        touchStart = 0;
		        var top = scroll.offsetTop;
		        // console.log(top);
		        // if(top>70)refresh();
		        if(top>0){
		            var time = setInterval(function(){
		              scroll.style.top = scroll.offsetTop -2 +'px';
		              if(scroll.offsetTop<=0)clearInterval(time);
		            },1)
		        }
		        // console.log(document.documentElement.clientHeight);
		        if(top<-1880){
		            var time = setInterval(function(){
		              scroll.style.top = scroll.offsetTop +3 +'px';
		              if(scroll.offsetTop>=-1880)clearInterval(time);
		            },1)
		        }
		    }, false);
			  
		   // }
		   
	}
}
</script>
<style type="text/css">
	.anihome-enter-active {
	  animation: fadeOut  1s;

	}
	.anihome-leave-active {
	  animation: fadeOut 1s;
	}
</style>