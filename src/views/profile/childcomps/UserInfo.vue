<template>
<div class="user-info">
 <a href="#">
   <slot name="user-icon">
    <div class="user-img ">
       <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
   </slot>
    <slot name="user-content">
      <div class="user-content">
        <div class="user-register">登录/注册</div>
      <div class="user-phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
      </div>
    </slot>
    <div class="user-back" @click="backclick">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
 </a>
</div>
  
</template>
<script>
export default {
  name:'UserInfo',
  methods:{
    backclick(){
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.user-info{
  /* margin-left: 15px; */
}
.user-info a{
  height: 88px;
  background: var(--color-tint);
  display: flex;
  align-items: center;
  padding:0 15px
}
.user-info a .user-img img{
    height: 65px;
    width: 65px;
}
.user-info a .user-phone img{
  vertical-align: middle;
  height: 25px;
  
}
.user-info a .user-back img{
  
  height: 30px;
}
.user-content{
  margin:0 15px;
  color: #fff;
}
.user-back{
 position: absolute;
 right:15px
}
.user-content .user-phone{
  margin-top:5px;
  font-size: 14px;
  margin-left: -5px;
}


</style>