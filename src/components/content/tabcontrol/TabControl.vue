<template>
  <div class="tab-control">
   <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="itemclick(index)" :class="{active:currentIndex==index}"><span>{{item}}</span></div>
  </div>
</template>
<script>
export default {
  name:'FeatureView',
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex=index
      this.$emit('tabclick',index)
    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background: #fff;
}
.tab-control-item{
  flex:1
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
  padding:3px
}
</style>