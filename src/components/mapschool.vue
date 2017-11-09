<template>
	<ul id="you" >	
		<li v-for="item in allSchool ">{{item}} </li>
	</ul>
</template>


<script type="text/javascript">

export default{
	data(){
		return {
			list:[this.$route.params.mid],
			allSchool:[],
			isok:true
		}
	},
	methods:{
		
	},
	beforeCreate(){

	},
	mounted(){
		this.$http.get('./src/json/city.json').then(function(data){

			console.log(11);
	  		this.allSchool = this.allSchool.concat(data.data[0].city[0].school);
	  		// console.log(this.allSchool);
	  	},function(err){
	  		console.log(err)
	  	})

	},
	beforeUpdate(){
		
		if(this.list[this.list.length -1] != this.$route.params.mid){
			this.list.push(this.$route.params.mid);
			this.isok = true;
		}
		if(this.isok){
			this.$http.get('./src/json/city.json').then(function(data){
			
				this.allSchool.splice(0,this.allSchool.length);
				
		  		this.allSchool = this.allSchool.concat(data.data[0].city[this.$route.params.mid].school);
		  		// console.log(this.allSchool);
		  	
		  	},function(err){
		  		console.log(err)
		  	})
		  	this.isok = false;
		}
	}
}
</script>