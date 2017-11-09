<template>
	<transition :enter-active-class = "anienter" :leave-active-class = "anileave">
		<div id="bigboxfen" v-if="show">
			<div id="route">
				<div id="fenlei">
					<header ref="head">
						<div id="school">
							<img src="../img/return.jpg" alt="" @click="ret()"/>
							<router-link :to="{name:'map'}" class="a">
								<img src="../img/map.jpg" alt="">
							</router-link>
							所有学校
						</div>
						
						<input type="text" value="搜索书籍" />
					</header>
					<section>
						<ul id="sel" ref="nav">
							<li v-for="(i,index) in list" @click="show1(index)" ref="inner" :id = "i.id">
								<router-link :to="{name:'select',params:{}}"  >
									{{i.title}}
								</router-link>
							</li>
						</ul>

						<div id="zhebox" ref="zhe" v-show="isok1">
							<div class="fenlist" > 
								<router-view @to-parent="getChildData" v-bind:active="activeIndex">
									
								</router-view>
								<div @click="del()"></div>
							</div>
							
						</div>
						
						<ul id="tushu" ref="tushu">
							
							<li class="li" v-for="i in listBook" @click="todet()">
								<router-link :to="{name:'detail',params:{did:i.id,anileave:'animated fadeOut'}}">
									<b>
										<img src="../img/p1.jpg" alt="">
										<img src="../img/p2.jpg" alt="">{{i.person}} <span>{{i.school}}</span>
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
					</section>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/javascript">

export default{	
	data(){
		return {
			list:[],
			isok1:false,
			ChildData:'',
			activeIndex:'',
			listBook:[],
			show:true,
			isok:false,
			isokani:false,
			anileave:'animated fadeOutRight',
			anienter:'animated fadeInRight'
		}
	},
	methods:{
		ret:function(){
			this.show = !this.show;
			
			this.$router.push('/home');
			
		},
		show1:function(index){
			this.isok1 = !this.isok1;	
			// console.log(index);		
			this.activeIndex = index;
		},

		del:function(){
			this.isok1 = !this.isok1;
		},
		getChildData: function(data) {//获取到的子组件值  data就是
          this.ChildData = data;
          this.$refs.inner[this.activeIndex].innerText = this.ChildData;
          this.isok1 = !this.isok1;
          this.isok = !this.isok;
        },
        todet:function(){
        	this.anileave = 'animated fadeoOutLeft';
        },
        geturl:function(str){
    		var str1 = str.split("?")[1];
    		if(str1){
    			var aa = str1.split("=")[1];
    			return aa;
    		}
    		
    	}

	},
	beforeMount(){
		
	},
	mounted(){	
		var anienter = this.geturl(window.location.href);
		console.log(anienter);
		if(anienter){
			this.anienter = "animated" +" " + anienter;
			console.log(this.anienter);
		}
		
		////////////////////////////////
		this.anileave = 'animated fadeOutLeft';
		// ================
		this.$http.get('./src/json/fenSel.json').then(function(data){
	  		this.list = this.list.concat(data.body);
	  		
	  	},function(err){
	  		console.log(err)
	  	})
		// ================
	  	this.$http.get('./src/json/book.json').then(function(data){
	  		// console.log(data.body);
	  		this.listBook = this.listBook.concat(data.body.book);
	  	}.bind(this),function(err){
	  		console.log(err)
	  	})


	  	// ================
	  	this.$refs.tushu.style.height = document.documentElement.clientHeight - this.$refs.head.clientHeight - this.$refs.nav.clientHeight + "px";
		

		this.$refs.zhe.style.top = this.$refs.head.offsetHeight + this.$refs.nav.offsetHeight + "px";

		this.$refs.zhe.style.height = document.documentElement.clientHeight - this.$refs.head.clientHeight - this.$refs.nav.clientHeight + "px";
		///////////////////////////////////////////////////////////////////////////

	},
	updated(){
		if(this.isok){
			this.listBook=[];
			this.$http.get('./src/json/book.json').then(function(data){
				var str = this.ChildData;
				for(var i=0;i<data.body.book.length;i++){
					if(data.body.book[i].classes == str ){
						this.listBook = this.listBook.concat(data.body.book[i]);
						console.log(this.listBook);
					}else if(data.body.book[i].belong == str ){
						this.listBook = this.listBook.concat(data.body.book[i]);
					}
				}
		  	this.listBook = this.listBook.concat(data.body.sell);
		  	}.bind(this),function(err){
		  		console.log(err)
		  	})
		  	this.isok = false;
		}

	}


	
}


</script>
<style type="text/css">

</style>