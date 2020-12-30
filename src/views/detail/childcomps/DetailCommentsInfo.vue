<template>
<div class="comment-info" v-if="Object.keys(cdetailcomments).length!==0">
<div class="info-header">
  <div class="header-title">用户评价</div>
  <div class="more">更多</div>
</div>
<div class="info-user">
  <img :src="cdetailcomments.user.avatar" alt="">
  <span class='user-name'>{{cdetailcomments.user.uname}}</span>
</div>
<div class="info-detail">
  <p>{{cdetailcomments.content}}</p>
  <div class="info-others">
    <span class="date">{{cdetailcomments.created | showDate}}</span>
    <span class="style">{{cdetailcomments.style}}</span>
  </div>
  <div class="info-img">
  <img :src="item" alt="" v-for="(item,index) in cdetailcomments.images" :key="index"> 
</div>
</div>
</div>
  
</template>
<script>
import {formatDate} from "common/utils"
export default {
  name:'DetailCommentsInfo',
  props:{
    cdetailcomments:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      const date=new Date(value*1000);
      return formatDate(date,'yyyy-MM-dd')
    }
  }
  
}
</script>
<style scoped>
.comment-info{
  padding:0 15px;
}
.info-header{
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  border-bottom: 2px solid  rgba(100,100,100,.1);
}
.header-title{
  font-size: 15px;
}
.more{
  font-size: 13px;
}
.info-user{
  margin:10px 0;
  position: relative;
}
.info-user img{
  height: 42px;
  width: 42px;
  border-radius: 50%;

}
.info-user .user-name{
  position: absolute;
  top:10px;
  left: 55px;
  color: #333;
}
.info-detail{
  font-size: 14px;
  line-height: 1.5;
  color:#777
}
.info-others{
  margin:10px 0;
   color: #999;
   font-size:12px
}
.info-others .date{
  margin-right:8px
}
.info-img {
  
}
.info-img img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
  
  
}

</style>