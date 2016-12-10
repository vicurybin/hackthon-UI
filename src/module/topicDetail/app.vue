<template>
  <div class="item"  >
      <div class="itemDiv">
        <div class="userInfo">
          <div class="iconDiv"><img :src="item.headimg" alt="" class="icon"></div>
          <div class="user">
            <div class="name" v-text="item.name">范斌</div>
            <div class="date" v-text="formatDate">2016-10-22</div>
          </div>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="imgDiv" v-if="format_img.length >0">
          <img :src="i" v-for="i in format_img" alt="" class="img" @click.stop="magnify(i)">
        </div>
      </div>
    </div>
    <div class="imgContainer" v-show="img_detail.show" @click="minify">
        <img :src="img_detail.link" alt="" class="detail">
    </div>
</template>

<script>

import Lib from 'assets/Lib.js'

// import moduleHead from 'components/module-head'

export default {
  data() {
    return {
      img_detail:{
        link:'',
        show:false
      }
    }
	// 	list:[0,1,2,3,4,5,6]	
 //    }
 //  },
 //  components: {
	// moduleHead
  },
  props:['item'],
  computed:{
    format_img(){
        if(this.item.img && this.item.img.length > 3){
            this.item.img = this.item.img.split(0,3);
            
        }
        return this.item.img
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
  background: rgba(0,0,0,0.8);
  // display: none;
  .detail{
    width:100%;
    display: block;
  }
}
.item{
  margin-bottom: 0.5em;
  .itemDiv{
    margin-top:10px;
    padding:0.6em 0.3em 0.1em;
    background: #fff;
    .userInfo{
      display: flex;
      display: -webkit-flex;
      align-items:center;
      -webkit-align-items: center;
      margin-left: 0.4em;
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
      margin:0.5em;
    }
    .imgDiv{
      display: flex;
      display: -webkit-flex;
      align-items:center;
      -webkit-align-items: center;
      margin:0.5em;
      img{
        width: 2em;
        margin-right: 1em;
      }
    }
    
  }
  
}


</style>





