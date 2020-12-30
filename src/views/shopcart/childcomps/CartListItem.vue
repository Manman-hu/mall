<template>
  <div id="cart-list-item">
   <div class="item-selcet">
      <check-button :isactive="shopproduct.isactive" @click.native="itemclick"></check-button>
   </div>
   <div class="item-img">
      <img :src="shopproduct.image" alt="">
   </div>
    <div class="item-info">
      <p class="title">{{shopproduct.title}}</p>
      <p class="desc">{{shopproduct.desc}}</p>
      <div class="info-bottom">
        <span class="left">￥{{shopproduct.realprice}}</span>
        <span class="right">x{{shopproduct.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name:'CartListItem',
  components:{
    CheckButton
  },
  props:{
    shopproduct:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    itemclick(){
      this.shopproduct.isactive=!this.shopproduct.isactive
    }
  }
}
</script>
<style scoped>
#cart-list-item {
  width: 100%;
  display: flex;
  border-bottom:1px solid rgba(100,100,100,.1);
  margin:5px 10px 8px 2px;
  padding:5px
}
.item-selcet{
  width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
}
 img{
width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
    margin:5px
}
.item-info  {
  font-size:17px;
padding: 5px 10px;
  color: #333;
  overflow: hidden;
  /* width: 265px; */
}
.item-info p{
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
}
.item-info .desc{
  font-size: 14px;
}
.left{
  float: left;
  color: orangered;
}
.right{
  float: right;
}



</style>