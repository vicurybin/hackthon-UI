import Vue from 'vue'
// import detail from '../topic/main.vue'

import  publishedNeed from './publishedNeed.vue' 
require('./publishedNeed.scss')
// var test = require('../topic/test.png')

import $ from 'jquery'

var vm = new Vue({
  el: 'body',
  components: { publishedNeed },
  data:{
  	needlist:[
      // {
      //   needid:'',  //本需求的id
      //   date:'2016-12-34',
      //   content:'这是我的需求需求',
      //   need:[
      //     'java',
      //     'html'    //最多三个
      //   ],
      //   reward:'技能交换',
      //   scrapenum:'2'  //抢单的数量
      // }
    ]


  },
  ready(){
      $.ajax({
        url:'/api/my_requirements',
        type:'POST',
        data:{
          uid:window.uid || 1,

        },
        success(reply){
          if(reply.status == 100){
              vm.needlist = reply.data.needlist;
          }
        }
      })
  }

})


