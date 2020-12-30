<template>
   <div id="profile">
     <nav-bar class="nav-bar">
       <template v-slot:center>我的档案</template>
     </nav-bar>
     <user-info></user-info>

     <div class="account">
       <div class="list-money">
         <div><span class="list-number">0.00</span><span>元</span></div>
         <div class="list-content">我的余额</div>
       </div>
       <div class="list-coupon">
         <div><span class="list-number">0</span><span>个</span></div>
         <div class="list-content">我的优惠</div>
       </div>
       <div class="list-integral">
         <div><span class="list-number">0</span><span>分</span></div>
         <div class="list-content">我的积分</div>
       </div>
     </div>

     <user-list></user-list>
     
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childcomps/UserInfo'
import UserList from './childcomps/UserList'
export default {
  name:'Profile',
  components:{
    NavBar,
    UserInfo,
    UserList
  },
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
#profile{
  background: rgba(0,0,0,.1);
}
.nav-bar{
  color: #fff;
  background-color: var(--color-tint);
}

.account{
  display: flex;
  height: 88px;
  font-size: 14px;
  background: #fff;
}
.account>div{
  flex:1;
  text-align: center; 
  padding-top: 24px;
}
.list-number{
  font-size: 20px;
  color: orange;
  font-weight: 700;
}
.list-content{
  margin-top:5px
}
.list-money,.list-coupon{
  border-right: 1px solid rgba(0,0,0,.1);
}
</style>