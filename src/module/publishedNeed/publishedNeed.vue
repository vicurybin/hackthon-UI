<template>
  <comm-topic v-for="item in needlist" :item="item" v-cloak>
      <div slot="content">
        <div class="needDiv" v-cloak >
          <img src="./need.png" alt="" class="icon">
          <span class="text">需求</span>
          <div class="tag" v-text="item.need"></div>
        </div>
        <div class="needDiv" v-cloak>
          <img src="./pay.png" alt="" class="icon">
          <span class="text">悬赏</span>
          <div class="tag" v-text="item.reward">技能交换</div>
        </div>
      </div>
      <span slot="text">抢单</span>
    </comm-topic>
</template>

<script>

import Lib from 'assets/Lib.js'

import  commTopic from '../../components/commTopic.vue' 

// import moduleHead from 'components/module-head'

export default {
  data() {
    return{
      
    }
	// 	list:[0,1,2,3,4,5,6]	
 //    }
 //  },
 //  components: {
	// moduleHead
  },
  components:{
    commTopic
  },
  props:['needlist'],
  computed:{
    
    
  },
  ready(){
  	
  	
  },
  methods: {
    
	
  
  }  
}
</script>

<style scoped lang="scss">



</style>





