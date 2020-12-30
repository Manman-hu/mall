<template>
<div class="detail-base-info" v-if="Object.keys(cgoods).length!==0">
    <div class="info-title"> {{cgoods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{cgoods.realPrice}}</span>
      <span class="o-price">{{cgoods.oldPrice}}</span>
      <span class="discount">{{cgoods.discount}}</span>
    </div>
    <div class="info-others">
      <span>{{cgoods.columns[0]}}</span>
       <span>{{cgoods.columns[1]}}</span>
       <span>{{cgoods.services[cgoods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in cgoods.services.length-1" :key="index" class="info-service-item">
        <img :src="cgoods.services[index-1].icon" alt="">
        <span>{{cgoods.services[index-1].name}}</span>
      </span>
    </div>
 
</div>

</template>
<script>
export default {
  name:'DetailBaseInfo',
  data(){
    return {
    }
  },
  props:{
    cgoods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
.detail-base-info{
margin-top:15px;
padding:0 8px;
color:#999;
border-bottom: 5px solid #f2f5f8;
}
.info-title{
  color: #222;
}
.info-price{
  margin-top:10px
}
.n-price{
  color: var(--color-high-text);
  font-size: 24px;
}
.o-price{
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 5px;
}
.discount{
  background: var(--color-high-text);
  color: #fff;
  font-size: 12px;
  padding:2px 5px; 
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top:-8px
} 
.info-others{
  font-size: 13px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top:15px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-services{
  display: flex;
  line-height: 60px;
  justify-content: space-between;
  font-size:13px;
  color: #333;
}
.info-service-item img{
  width: 14px;
  height: 14px;
  vertical-align: middle;

}

</style>