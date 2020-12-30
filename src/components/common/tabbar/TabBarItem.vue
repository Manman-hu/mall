<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-acitve'></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>
<script>
export default {
  name:'TabBarItem',
  data(){
    return {
    
    }
  },
  computed:{
  isActive(){
    return this.$route.path==this.path
  },
  activeStyle(){
    return this.isActive?{color:this.activecolor}:{}
  }
  },
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'red'
    }
  },
  methods:{
    itemclick(){
      this.$router.push(this.path)
    }
  }
}
</script>
<style>
.tab-bar-item{
  flex:1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  margin-top:3px
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
/* .color{
  color: red;
} */
</style>