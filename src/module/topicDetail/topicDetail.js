import Vue from 'vue'
// import detail from '../topic/main.vue'

import  detail from './app.vue' 
import  commentModule from './comment.vue' 
import  inputInner from './inputInner.vue' 
require('./topicDetail.scss')
var test = require('../topic/test.png')
import $ from 'jquery'
import Lib from 'assets/Lib'
/* eslint-disable no-new */
var vm = new Vue({
  el: 'body',
  components: { detail,commentModule,inputInner},
  data:{
  	item:{
  		// headimg:'test.png',
  		// name:'范斌bb',
  		// date:'2012-44-32',
  		// content:'求助求助求助',
  		// img:[test]
  	},
    comments:[
      // {
      //   "awesomenum": 4,
      //       "commentid": 1,
      //       "content": "祝好",
      //       "date": 1481263294,
      //       "headimg": "/static/defalut-avatar",
      //       "name": "左烨",
      //       ifawesomed:true,
      // },
     
    ],
    topicid:''
  }
})
var topicid = Lib.M.getValueFromSearch('topicid');

$.ajax({
  url:'/api/topicdetail',
  type:'POST',
  data:{
    topicid:topicid,
    uid:window.uid || 1,
  },
  success:function(reply){
    vm.item = reply.info;
    vm.comments = reply.comment;
    vm.topicid = reply.topicid;
  }
})
$('body').on('cha',function(){
  vm.comments.push(window.__ARR__);
})