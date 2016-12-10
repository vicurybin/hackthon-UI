import Vue from 'vue'
import main from './main'
import $ from 'jquery'
import topicscss from './topic.scss';
var test = require('./test.png')
// var  $ = require('zepto')
/* eslint-disable no-new */
var vm = new Vue({
  el: 'body',
  components: { main },
  data:{
  	list:[
	  	{
	  		headimg:'test.png',
	  		name:'范斌bin',
	  		date:'2012-44-32',
	  		content:'求助求助求助',
	  		// img:[test]
	  	},
	  	{
	  		headimg:'test.png',
	  		name:'范斌bb',
	  		date:'2012-44-32',
	  		content:'求助求助求助',
	  		img:[test]
	  	}
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
              vm.list = reply.publishedList;
        }
      })
  }
})
