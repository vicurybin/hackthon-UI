<template>

	
	<div class="item"  @click="toDetail(list.topicid)">
		<div class="itemDiv">
			<div class="userInfo">
				<div class="iconDiv"><img :src="list.headimg" alt="" class="icon"></div>
				<div class="user">
					<div class="name" v-text="list.name">范斌</div>
					<div class="date" v-text="formatDate">2016-10-22</div>
				</div>
			</div>
			<div class="content">
				{{list.content}}
			</div>
			<div class="imgDiv" v-if="format_img.length >0">
				<img :src="i" v-for="i in format_img" alt="" class="img" @click.stop="magnify(i)">
			</div>
			<div class="buttCon">
				<div class="buttDiv">
			        <div class="butt">
			          <img src="./img/re.png" alt="" class="icon">
			          <span class="re">回复</span>
			          <span class="num" v-text="list.replynum">4</span>
			        </div>
			        <div class="butt">立即回复</div>
			    </div>
			</div>
			
		</div>
	</div>
	<div class="imgContainer" v-show="img_detail.show" @click="minify">
		<img :src="img_detail.link" alt="" class="detail">
	</div>


</template>

<script>
// var test = require('./test.png');
import Lib from 'assets/Lib.js'

// import Button from 'components/Button';
export default {
  data() {
    return {
    	img_detail:{
    		link:'',
    		show:false
    	}
  //   	appname:Lib.C.appname,
  //   	logo:Lib.C.logo,
  //   	user:{
  //   		UserName:'lanchenglv.com',
  //   		PassWord:'lanchenglv.com'
  //   	},
  //   	loginerror:'',
  //   	//是否记住密码
  //   	remember_paw:1,
		// login_height:500
		// list:[]
    }
  },
  props:['list'],
  computed:{
  	format_img(){
  		if(this.list.img && this.list.img.length > 3){
	  		this.list.img = this.list.img.split(0,3);
	  		
	  	}
	  	return this.list.img
  	},
  	formatDate(){
      return Lib.M.formatTime(this.list.date,1);
    }
  	
  },
 //  components: {
	// Button	
 //  },
  ready(){
  	
  	
  },
  methods: {
  	toDetail(id){
  		window.location.href = 'topicDetail.html?uid=' + window.uid + '&topicid=' + id;
  	},
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
	// //登陆操作
 //    loginAction(){
	
	// 	this.loginerror = "登陆成功，请稍等...";
	
	// 	setTimeout(()=>{
			
	// 		window.location.href = "welcome.html";
		
	// 	},1000);
		
		
	// },
	
	// //记住密码
	// rememberPassword(){
		
	// 	return this.remember_paw ? '&#xe6dd;' : '&#xe601;';
		
	// }
	
  
  }  
}
</script>

<style scoped  lang="scss">
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
	.itemDiv{
		margin-top:0.5em;
		padding:0.6em 0.8em 0.2em;
		background: #fff;
		.userInfo{
			display: flex;
			display: -webkit-flex;
			align-items:center;
			-webkit-align-items: center;

			.iconDiv{

				.icon{
					width: 2em;
					height: 2em;
					margin-right:0.5em;
					display: block;
					border-radius:50%;
					overflow: hidden;
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
		}
		.content{
			font-size: 0.85em;
			margin:0.5em 0em;
		}
		.imgDiv{
			display: flex;
			display: -webkit-flex;
			align-items:center;
			-webkit-align-items: center;
			margin:0.5em 0;
			img{
				width: 2em;
				margin-right: 1em;
			}
		}
		.buttCon{
			position:relative;
			.buttDiv{
				border-top:1px solid #efeff4;
				display: flex;
				display: -webkit-flex;
				align-items:center;
				-webkit-align-items: center;
				justify-content: center;
				-webkit-justify-content:center;
				padding:0.5em;
				font-size: 0.8em;
				.butt{
					display: flex;
					display: -webkit-flex;
					align-items:center;
					-webkit-align-items: center;
					.icon{
						width: 1.2em;
					}
					.re{
						margin:0 0.3em;
						color:#707070;
					}
					.num{
						color:#707070;

					}
				}
				.butt:last-child{
					margin-left: 2em;
					padding:0.2em 0.4em;
					// background:gray;
					// border-radius:3px;
					color:#0084ff;
					position:absolute;
					right:0;
				}
			}
		}
		
	}
	
}


</style>





