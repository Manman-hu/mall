<template>
 <grid-view>
<div class="detail-item" v-for="(item,index) in catedetail" :key="index">
  <a :href="item.link">
    <img v-lazy="item.img" alt="" @load="imgload">
    <p>{{item.title}}</p>
    <div class="detail">
      <span class="price">￥{{item.price}}</span>
      <span class="fav">{{item.cfav}}</span>
    </div>
  </a>
</div>
 </grid-view>
</template>
<script>
import GridView from 'components/common/gridview/GridView'
export default {
  name:'TabContentDetail',
  components:{
    GridView
  },
  props:{
    catedetail:{
type:Array,
default(){
  []
}
    }
  },
  methods:{
    imgload(){
      this.$emit("imgload")
    }
  }
  
}
</script>
<style scoped>
.detail-item{
  font-size: 12px;
}
img{
  width: 100%;
}
p{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  margin-bottom: 3px;

}
.detail{
  text-align: center;
}
.detail .price{
  color:var(--color-high-text);
  position: relative;
  padding-right:20px
}
.detail .price::after{
  content:'';
  position: absolute;
  top:1px;
  right:2px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
  
</style>