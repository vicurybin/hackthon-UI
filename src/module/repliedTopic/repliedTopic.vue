<template>
	<div class="replyDiv">
		<div class="dateDiv">
			<div class="date" v-text="formatDate">2015-12-12</div>
			<div class="awe">
				<img src="../topicDetail/before.png" alt="" class="aweimg">
				<div class="item.awesomenum">10</div>
			</div>
		</div>
		<div class="content" v-text="item.content">这里是评论</div>
		<div class="originDiv">
			<div class="userinfo">
				<img :src="item.originTopic.headimg" alt="" class="headimg">
				<div class="user">
					<div class="name" v-text="item.originTopic.name">范斌</div>
					<div class="date"  v-text="formatOriginDate">2015-1-21</div>
				</div>
			</div>
			<div class="content" v-text="item.originTopic.content">这里是原问题</div>
		</div>
	</div>
</template>

<script>

import Lib from 'assets/Lib.js'

export default {
  data() {
    return {
      	
    }
  },
  props:['item'],
  computed:{
    formatDate(){
      return Lib.M.formatTime(this.item.date,1);
    },
    formatOriginDate(){
    	return Lib.M.formatTime(this.item.originTopic.date,1);
    }
    
  },
  ready(){
  	
  	
  },
  methods: {
    
	
  
  }  
}
</script>

<style scoped lang="scss">
.replyDiv{
	padding:0.4em 0.8em;

	margin-top:0.5em;
	background:#fff;
	.dateDiv{
		font-size: 0.8em;
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		.date{
			color:#a4a4a4;
		}
		.awe{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			margin-left: auto;
			.aweimg{
				width: 1.2em;
				margin-right: 0.3em;
			}
			.awenum{
				color:#707070;
			}
		}
	}
	.content{
		font-size: 0.85em;
		margin:0.3em 0;

	}
	.originDiv{
		padding:0.6em 0.8em;
		background: #efeff4;
		.userinfo{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			.headimg{
				width: 2em;
				height: 2em;
				display: block;
				margin-right: 0.5em;

			}
			.user{

				.name{
					font-size: 0.85em;
				}
				.date{
					font-size: 0.8em;
					color:#a4a4a4;
				}
			}
		}
		.content{
			
		}

	}
















	
}


</style>





