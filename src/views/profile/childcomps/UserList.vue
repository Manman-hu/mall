<template>
  <div class="user-list">
  <ul class="orderlist">
    <li><img src="~assets/img/profile/message.svg" alt="">
    <span>我的消息</span></li>
     <li><img src="~assets/img/profile/pointer.svg" alt="">
    <span>积分商城</span></li>
     <li><img src="~assets/img/profile/vip.svg" alt="">
    <span>会员卡</span></li>    
  </ul>
  <ul class="servicelist">
    <li><img src="~assets/img/profile/cart.svg" alt="">
    <span>我的购物车</span></li> 
     <li><img src="~assets/img/profile/shopping.svg" alt="">
    <span>下载购物APP</span></li> 
  </ul>
  </div>
</template>
<script>
export default {
  name:'UserList',
  props:{
  
  }
}
</script>
<style scoped>
.user-list{
  
  margin-top:20px;

}
img{
  height: 18px;
  vertical-align: middle;
  margin-right: 10px;
}
li{
  line-height: 40px;
  border-bottom:1px solid rgba(0,0,0,.1);
  list-style: none;
}
.servicelist{
  margin-top: 20px;
  background: #fff;
   padding-left: 15px;
}
.orderlist{
  background: #fff;
  padding-left: 15px;
}
</style>
