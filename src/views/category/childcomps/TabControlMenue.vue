<template>
  <div class="control-menue">
  <scroll class="content">
    <div class='menue-item' v-for="(item,index) in ccategories" :key="index" @click='menueclick(index)' :class="{clicked:currentindex==index}">{{item.title}}</div>

    </scroll>
  </div>
  
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'TabControlMenue',
  components:{
    Scroll
  },
  props:{
  ccategories:{  
    type:Array,
    default(){
      []
    }},
    currentindex:{
      type:Number
    }
  },
  methods:{
    menueclick(index){
      this.$emit('menueclick',index)
    }
  }
  
}
</script>
<style scoped>
.content{
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.control-menue{
  width: 100px;
  background: #f6f6f6;
}
.menue-item{
  height: 45px;
  width: 100px;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
}
.clicked{
  background: #fff;
  border-left: 2px solid var(--color-high-text);
}
</style>