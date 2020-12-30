<template>
<nav-bar >
  <template v-slot:left><div class="back"><img src="~assets/img/common/back.svg" alt="" @click="backclick"></div></template>
 <template v-slot:center>
  <div class="titles">
      <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:currentIndex==index}" @click="itemclick(index)">{{item}}</div>
  </div>
  </template>
</nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
export default { 
  name:'DetailNavBar',
  components:{
NavBar
  },
  data(){
    return {
    titles:['商品','参数','评论','推荐'],
    currentIndex:0,
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex=index
      this.$emit('titleclick',index)
    },
    backclick(){
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.titles{
  display: flex;
  font-size: 13px;
}
.title-item{
  flex:1
}
.back img{
  margin-top:12px
}
.active{
  color:var(--color-high-text)
}

</style>
