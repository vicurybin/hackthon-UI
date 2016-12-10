<template>
  		<div class="scrapeDiv">
  			<div class="statusDiv">
  				<div class="sta">
  					<span  v-text="item.status == 1 ? '抢单成功' : '木有抢到'"></span>
  					<div class="point" v-show="item.watch_status"></div>
  				</div>
  				<div class="date" v-text="format_answer_time">2016-21-11</div>
  			</div>
  			<div class="originNeed">
  				<div class="userinfoDiv">
  					<img :src="item.user.avatar" alt="" class="headimg">
  					<div class="user">
  						<div class="name" v-text="item.user.name">范斌</div>
  						<div class="date" v-text="format_publish_time">2016-12-12</div>
  					</div>
  				</div>
  				<div class="content">
  					想学习java
  				</div>
  				<div class="needDiv" v-cloak >
		          <img src="../publishedNeed/need.png" alt="" class="icon">
		          <span class="text">需求</span>
		          <div class="tag" v-text="item.need"></div>
		        </div>
		        <div class="needDiv" v-cloak>
		          <img src="../publishedNeed/pay.png" alt="" class="icon">
		          <span class="text">悬赏</span>
		          <div class="tag" v-text="item.reward">技能交换</div>
		        </div>
  			</div>
  		</div>
</template>

<script>

import Lib from 'assets/Lib.js'

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
  props:['item'],
  computed:{

    format_answer_time(){

    	return formatTime(this.item.answer_time,1);

    },
    format_publish_time(){
    	return formatTime(this.item.publish_time,1);
    }
    
  },
  ready(){
	  	
  },
  methods: {
    
	
  
  }  
}
</script>

<style scoped lang="scss">
.scrapeDiv{
	padding:0.6em 0.8em;
	margin-top:0.5em;
	background:#fff;
	.statusDiv{
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		padding:0em 0 0.3em;
		.sta{
			font-size: 0.85em;
			position: relative;
			.point{
				background: red;
				width:8px;
				height: 8px;
				position:absolute;
				right:-10px;
				top:0;
				border-radius: 4px;
			}
		}
		.date{
			margin-left: auto;
			font-size: 0.8em;
			color:#a4a4a4;
		}
	}
	.originNeed{
		padding:.7em;
		background:#efeff4;

		.userinfoDiv{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			
			.headimg{
				width:2em;
				height: 2em;
				display: block;
				margin-right: 0.5em;
				border-radius:50%;
				overflow: hidden;
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
			font-size: 0.85em;
			margin:0.5em 0;
		}
		.needDiv{
		    font-size: 0.8em;
		    display: flex;
		    display: -webkit-flex;
		    align-items:center;
		    -webkit-align-items: center;

		    .icon{
		      width:1.2em;
		      margin-right: 0.3em;
		    }
		    .text{
		      color:#17bd0a;
		      margin-right: 0.5em;
		    }
		    .tag{
		     background:#0084ff;
		      border-radius:3px;
		      padding:0.2em;
		      color:#fff;
		      margin-right: 10px;
		      padding:1px 10px;
		    }
		}
		.needDiv:last-child{
			margin-top: 0.5em;
			.text{
				color:#fd500d;
			}
		}
	}
}


</style>





