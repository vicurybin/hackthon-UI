import Vue from 'vue'
// import detail from '../topic/main.vue'
import $ from 'jquery'
import  repliedTopic from './repliedTopic.vue' 
require('./repliedTopic.scss')
var test = require('../topic/test.png')



var vm = new Vue({
  el: 'body',
  components: { repliedTopic },
  data:{
  	repliedList:[
  		// {
  		// 	date:'2015-21-22',
    //     comment:'评论评论',
    //     awesomenum:12,
    //     originInfo:{
    //       icon:'',
    //       name:'范斌',
    //       date:'2016-12-34',
    //       title:'这是我的求助内容内容，'
    //     }
  		// }

  	]

  },
  ready(){
      $.ajax({
        url:'/api/replied_topic',
        type:'POST',
        data:{
          uid:window.uid || 1,
        },
        success(reply){
              vm.repliedList = reply.replyedList;
        }
      })
  }
})