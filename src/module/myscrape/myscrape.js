import Vue from 'vue'
// import detail from '../topic/main.vue'
import $ from 'jquery'
import  myscrape from './myscrape.vue' 
require('./myscrape.scss')
// var test = require('../topic/test.png')
import Lib from 'assets/Lib.js'
window.formatTime = function(time,type){
    var   now = new  Date(time * 1000);   

      var   year=now.getFullYear() % 2000;     
        var   month=now.getMonth()+1;     
        var   date=now.getDate();     
        var   hour=now.getHours();     
        var   minute=now.getMinutes();     
        var   second=now.getSeconds(); 
        if(type == 1){
          return year+"-"+month+"-"+date;
        }else if(type == 2){
          return (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);     
        }else if(type ==3){
          return year+"-"+month+"-"+date +" "+  (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
        }
  }

var vm = new Vue({
  el: 'body',
  components: { myscrape },
  data:{
  	myscrapelist:[
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
    // console.log(Lib.M.myfun())
    $.ajax({
        url:'/api/my_answers',
        type:'POST',
        data:{
          uid:window.uid || 1,
          watch_time:Math.floor(new Date().getTime()/1000)
        },
        success(reply){
          if(reply.status == 100){
              vm.myscrapelist = reply.data.answer_list;

          }else{
            $('body').html('您还没有抢单')
          }
        }
      })
  }
})



// answer_list: [
//   {
//   user:{//发布该需求的用户的信息
//   uid:
//   name:
//   avatar:
//   gender:
//   },
//   answer_time://抢单时间,
//   publish_time://需求发布的时间,
//   status://需求的状态 1表示抢单成功
//   content://需求内容,
//   reward://悬赏
//   need://想交流的技能
//   }
// {
// ...
// },
// ...
// ]