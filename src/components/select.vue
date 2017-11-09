<template>
	<ul >
		<li  v-for="i in sel" @click="send(i)">
			{{i}}
		</li>
	</ul>
		
</template>


<script type="text/javascript">

export default{
	data(){
		return {
			only:[this.active],
			sel:[],
			isok:true,
			index:'',
			activeI:''
		}
	},
	props: ['active'],
	methods:{
		send:function(i){
			this.index=i;
			this.$emit('to-parent',this.index);
			// this.isok = !this.isok;
		}
	},
	mounted(){
		this.isok = !this.isok;
		this.$http.get('./src/json/fenSel.json').then(function(data){
	  		this.sel = this.sel.concat(data.body[0].content);
	  	},function(err){
	  		console.log(err)
	  	})
	},

	beforeUpdate(){
		if(this.only[this.only.length -1] != this.active){
			this.only.push(this.active);
			this.isok = true;
		}
		if(this.isok){
			console.log(this.active);
			this.$http.get('./src/json/fenSel.json').then(function(data){
			this.sel.splice(0,this.sel.length);
			if(this.active){
				this.sel = this.sel.concat(data.body[this.active].content);
			}else{
				this.sel = this.sel.concat(data.body[0].content);
			}
	  		
	  	},function(err){
	  		console.log(err)
	  	})
		  	this.isok = false;
		}
	}
}
</script>