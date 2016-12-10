<template>
	<div class="item">
		<div class="date" v-text="formatDate">2016-11-23</div>
		<div class="title" v-text="item.content">[求助]哪位大神告诉我啊啊啊啊啊啊啊啊</div>
		<div class="imgDiv" v-if="formatImg != false">
			<img :src="i" v-for="i in formatImg" alt="" class="askImg" @click.stop="magnify(i)">
		</div>
		<div class="re">
			<img src="./text.png" alt="" class="icon">
			<span class="text">回复</span>
			<div class="num" v-text="item.replynum">11</div>
		</div>
	</div>
	<div class="imgContainer" v-show="img_detail.show" @click="minify">
		<img :src="img_detail.link" alt="" class="detail">
	</div>
</template>

<script>

import Lib from 'assets/Lib.js'

export default {
  data() {
    return {
      	img_detail:{
    		link:'',
    		show:false
    	}
    }
  },
  props:['item'],
  computed:{
    formatImg(){
    	if(this.item.img.length>3){
    		this.item.img = this.item.img.split(0,3);
    	}else if(this.item.img.length==0){
    		return false;
    	}
    	return this.item.img;
    },
    formatDate(){
      return Lib.M.formatTime(this.item.date,1);
    }
    
  },
  ready(){
  	
  	
  },
  methods: {
    magnify(img_url){
		console.log('放大')
		this.img_detail = {
			link:img_url,
			show:true
		}
	},
	minify(){
		this.img_detail = {
			link:'',
			show:false
		}
	}
	
  
  }  
}
</script>

<style scoped lang="scss">
.imgContainer{
	position:fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	z-index:10;
	background:rgba(0,0,0,0.8);
	// display: none;
	.detail{
		width:100%;
		display: block;
	}
}
.item{
	padding:0.2em 0.8em 0;

	margin-top:0.5em;
	background:#fff;
	.date{
		color:#a4a4a4;
		margin:0.5em 0;
		font-size: 0.8em;
	}
	.title{
		margin:0.5em 0;
		font-size: 0.85em;
	}
	.imgDiv{
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		margin:0.5em 0;
		img{
			width:2em;
			margin-right: 1em;
		}
	}
	.re{
		padding:0.8em 0;
		border-top:1px solid #efeff4;
		display: flex;
		display: -webkit-flex;
		align-items:center;
		-webkit-align-items: center;
		justify-content: center;
		-webkit-justify-content: center;
		font-size: 0.8em;
		.icon{
			width:1.2em;
		}
		.text{
			margin:0 0.5em;
			color:#707070;
		}
		.num{
			display: inline-block;
			color:#707070;
		}
		.newReply{
			display: inline-block;
			color:#fff;
			width:1.4em;
			height: 1.4em;
			display: flex;
			display: flex;
			align-items:center;
			-webkit-align-items: center;
			justify-content: center;
			-webkit-justify-content: center;
			background:red;
			border-radius:50%;
			overflow: hidden;
			margin-left: 0.5em;
		}
	}
}


</style>





