<template>
	<ul>
		<li v-for="i in list">{{i}}</li>
	</ul>
</template>
<script type="text/javascript">

export default{
	data(){
		return {
			list:[]
		}
	},
	methods:{
		
		
	},
	components:{
		
	},
	beforeMount(){
		var num = this.$route.params.fid;
		console.log(num);
		this.$http.get('./src/json/fenlist.json').then(function(data){
			// console.log(data.body[num].fenlei);
	  		this.list = this.list.concat(data.body[num].fenlei);
	  		// console.log(this.list);
	  	},function(err){
	  		console.log(err)
	  	})
	}
}
</script>