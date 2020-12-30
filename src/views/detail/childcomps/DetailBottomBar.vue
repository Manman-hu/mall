<template>
<div class="bottom-bar ">
  <div class="bar-item left">
    <div>
      <i class="icon service"></i>
      <span>客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>
    <div>
      <i class="icon select"></i>
      <span>收藏</span>
    </div>
  </div>
  <div class="bar-item right">
    <div class="shopcar" @click="addtocar">加入购物车</div>
    <div class="buy">购买</div>
  </div>

</div>
  
</template>
<script>
export default {
  name:'DetailBottomBar',
  methods:{
    addtocar(){
      this.$emit('addtocar')
    }
  }
  
}
</script>
<style scoped>
.bottom-bar{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
 background: #fff;
  font-size: 13px;
  
}
.bar-item{
  display: flex;
}
.left{
  width: 55%;
  background: #fff;
}
.right{
  width: 45%;
   line-height: 49px;
}
.bar-item div{
  flex:1;
  text-align: center;
 
}
.shopcar{
   background-color: #ffe817;
    color: #333;
}
.buy{
   background-color: #f69;
   color: #fff;
}
  .left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 7px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .left .service {
    background-position:0 -54px;
  }
  .left .shop {
    background-position:0 -98px;
  }


</style>