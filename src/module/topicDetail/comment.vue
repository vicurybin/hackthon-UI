<template>
  		<div class="comm">
  			<div class="userInfo">
				<div class="iconDiv"><img :src="comment.headimg" alt="" class="icon"></div>
				<div class="user">
					<div class="name" v-text="comment.name">范斌</div>
					<div class="date"  v-text="formatDate">2016-10-22</div>
				</div>
				<div class="awe" @click="awesome(comment.commentid)">
					<img src="before.png" v-show="!comment.ifawesomed" alt="" class="aweimg" >
					<img src="after.png" v-show="comment.ifawesomed" alt="" class="aweimg">
					<span class="num"  v-text="comment.awesomenum" :class="comment.ifawesomed ? 'blue' : ''">10</span>
				</div>
			</div>
			<div class="content">
				
				<span  v-text="comment.content">
					这里是评论
				</span>
			</div>
  		</div>
</template>

<script>

import Lib from 'assets/Lib.js'
import $ from 'jquery'
// import moduleHead from 'components/module-head'

export default {
  data() {
    return {
      
    }
	// 	list:[0,1,2,3,4,5,6]	
 //    }
 //  },
 //  components: {
	// moduleHead
  },
  props:['comment','topicid'],
  computed:{
    formatDate(){
      return Lib.M.formatTime(this.comment.date,1);
    }
    
  },
  ready(){
  	
  	
  },
  methods: {
    awesome(){
    	this.comment.ifawesomed = !this.comment.ifawesomed;
    	let commentid = this.comment.commentid;
    	let topicid = this.topicid;
    	let vm = this
    	if(this.comment.ifawesomed){
    		$.ajax({
    			url:'/api/comment_awesome',
    			type:'POST',
    			data:{
    				topicid:topicid,
					commentid:commentid,
					uid:window.uid || 1
    			},
    			success:function (reply) {
    					// window.location.reload()
    				vm.comment.awesomenum++
    			}
    		})
    		
    	}else{
    		this.comment.awesomenum--
    	}
    }
	
  
  }  
}
</script>

<style scoped lang="scss">
.comm{
	padding:0.6em 0.8em 0.3em;
	background:#fff;
	border-bottom:1px solid #efeff4;
	.userInfo{
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		.iconDiv{
			width:2em;
			height: 2em;
			overflow: hidden;
			margin-right: 0.5em;
			.icon{
				width: 2em;
			}
		}
		.user{
			
			.name{
				font-size: 0.85em;
			}
			.date{
				color:#a4a4a4;
				font-size: 0.8em;
			}
		}
		.awe{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			margin-left: auto;
			.aweimg{
				width: 1.2em;
			}
			.num{
				font-size: 0.8em;
				margin-left: 0.3em;
				color:#707070;
				
			}
			.num.blue{
				color:#0084ff;
			}
		}
	}
	.content{
		// padding-left: 2.5em;
		padding:0.3em 0 0.1em 2.5em;
		span{
			font-size: 0.85em;
		}
	}
}


</style>





