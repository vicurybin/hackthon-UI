<template>
  <div class="item">
    <div class="date" v-text="formatDate">2016-11-23</div>
    <div class="title" v-text="item.content">[求助]哪位大神告诉我啊啊啊啊啊啊啊啊</div>
    <slot name="content"></slot>
    <div class="re">
      <img src="../module/publishedNeed/scrap.png" alt="" class="icon">
      <span class="text" @click="scrapeItem(item.needid)">

        <slot name="text"></slot>
      </span>
      <div class="num">
        <span  v-text="item.answer_users.length"></span>
        <span class="newReply" v-show="!item.watch_status"></span>
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
  },
  props:['item'],
  computed:{
    formatDate(){
      return Lib.M.formatTime(this.item.pub_time,1);
    }
    
  },
  ready(){
    
    
  },
  methods: {
    
  scrapeItem(needid){
    // window.location.href = 'myscrape.html'
    ddb.toRquireDetail(''+needid)
  }
  
  }  
}
</script>


<style  lang="scss">
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
    color:#000000;
  }
  .needDiv{
    font-size: 0.8em;
    display: flex;
    display: -webkit-flex;
    align-items:center;
    -webkit-align-items: center;

    .icon{
      width:1.2em;
    }
    .text{
      margin:0 0.3em;
      color:#17bd0a;
    }
    // .text:last-child{
     
    // }
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

  .re{
    padding:0.5em 0;
    border-top:1px solid #efeff4;
    display: flex;
    display: -webkit-flex;
    align-items:center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    font-size: 0.8em;
    margin-top:0.5em;
    .icon{
      width:1.2em;
    }
    .text{
      margin:0 0.3em;
      color:#707070;
    }
    .num{
      display: inline-block;
      color:#707070;
      position:relative;
      .newReply{
        height: 8px;
        width: 8px;
        border-radius:4px;
        background:red;
        position:absolute;
        display: inline-block;
        right:-15px;
        top:0;

      }
    }
    
  }
}


</style>





