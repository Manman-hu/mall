<template>
  <grid-view :cols="3" :linespace="15" :vmargin="20" v-if="subcategorydata.list" >
    <div class="subcate-item" v-for="(item,index) in subcategorydata.list" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </grid-view>
</template>
<script>
import GridView from 'components/common/gridview/GridView'
export default {
  name:'TabContentCategory',
  components:{
    GridView
  },
  props:{
    subcategorydata:{
      type:Object,
      default(){
      {}
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
  .panel img {
    width: 100%;
  }

  .subcate-item {
    text-align: center;
    font-size: 12px;
  }

  .subcate-item img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }

</style>