<template>
  <div class='goods-list-item' @click="itemclick">    
      <!-- <img :src="showimage" alt="" @load="imageLoad"> -->
      <img v-lazy="showimage" alt="" @load="imageLoad">

      <div class="goods-info">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
         <span class="collect">{{goodsitem.cfav}}</span>
      </div>
    
  </div>
 
</template>
<script>
export default {
  name:'GoodsList',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showimage(){
      return this.goodsitem.image||this.goodsitem.show.img
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit("itemImageLoad")
    },
    itemclick(){
      this.$router.push('/detail/'+this.goodsitem.iid)
      // console.log(this.goodsitem);
    }
  }
 
}
</script>
<style scoped>
.goods-list-item
{
  width: 48%;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  width: 100%;
  height: 40px;
  font-size: 12px;
  text-align: center;
}
.goods-info p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect{
   position: relative;
}
.goods-info .collect::before{
  content:'';
  position: absolute;
  top:1px;
  left:-15px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>