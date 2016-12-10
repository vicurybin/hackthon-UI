<template>
  		<div class="input">
  			<input type="text" placeholder="回复" class="comment" v-model="comment">
  			<div class="send" @click="send">发送</div>
  		</div>
</template>

<script>

import Lib from 'assets/Lib.js'
import $ from 'jquery'
// import moduleHead from 'components/module-head'

export default {
  data() {
    return {
      comment:''
    }
	// 	list:[0,1,2,3,4,5,6]	
 //    }
 //  },
 //  components: {
	// moduleHead
  },
  props:['topicid'],
  computed:{
    
    
  },
  ready(){
  	
  	
  },
  methods: {
    
	send(){
		let content = this.comment;
		let topicid = this.topicid;
		let vm = this;
		$.ajax({
		  url:'/api/comment',
		  type:'POST',
		  data:{
		    topicid:topicid,
		    uid:window.uid || 1,
		    content:content
		  },
		  success:function(reply){
		    // window.location.reload();
		    window.__ARR__ = reply;
		    $('body').trigger('cha');
		    vm.comment = '';
		  }
		})
	}
  
  }  
}
</script>

<style scoped lang="scss">
.input{
	display: flex;
	display:-webkit-flex;
	align-items:center;
	-webkit-align-items:center;
	padding:0.5em 1em;
	background:#fff;
	position:fixed;
	left:0;
	width:100%;
	bottom:0;
	box-sizing:border-box;

	input{

		flex:75%;
		margin-right: 5%;
		text-decoration: none;
	}
	.send{
		flex:10%;
		background: #0084ff;
		color:#fff;
		padding:0.4em 0.7em;
		border-radius: 3px;
		font-size: 0.8em;
		text-align: center;
	}
}

</style>





