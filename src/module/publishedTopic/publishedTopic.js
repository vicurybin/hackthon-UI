import Vue from 'vue'
// import detail from '../topic/main.vue'
import $ from 'jquery'
import  published from './published.vue' 
require('./publishedTopic.scss')
var test = require('../topic/test.png')



var vm = new Vue({
  el: 'body',
  components: { published },
  data:{
  	publishedList:[
  		// {
  		// 	date:'2016-22-11',
  		// 	title:'求助啊啊啊啊啊啊啊',
  		// 	askImg:[
  		// 		test
  		// 	],
  		// 	replyNum:11,
  		// 	newReplyNum:3
  		// }

  	]

  },
  ready(){
      $.ajax({
        url:'/api/published_topic',
        type:'POST',
        data:{
          uid:window.uid || 1,
        },
        success(reply){
              vm.publishedList = reply.publishedList;
        }
      })
  }
})