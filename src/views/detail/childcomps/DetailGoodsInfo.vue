<template>
<div class="goods-info clear-fix" v-if="Object.keys(cdetailinfo).length!==0">
  <div class="info-desc">
    <div class="start"></div>
    <div class="desc">{{cdetailinfo.desc}}</div>
    <div class="end"></div>
  </div>
  <div class="info-key">{{cdetailinfo.detailImage[0].key}}</div>
  <div class="info-list">
    <img :src="item" alt="" v-for="(item,index) in cdetailinfo.detailImage[0].list" :key="index" @load="imgload">
  </div>
</div>
  
</template>
<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    cdetailinfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
return {
  counter:0,
  imageslength:0
}
  },
  methods:{
    imgload(){
      if(++this.counter===this.imageslength){
        this.$emit("imgload")
      }
      
    }
  },
  watch:{
    cdetailinfo(){
      this.imageslength=this.cdetailinfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }

</style>