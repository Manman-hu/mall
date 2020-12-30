<template>
  <div>
    <Swiper>
    <swiper-item v-for='(item,index) in cbanner' :key='index' >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
 </Swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'HomeSwiper',
  props:{
    cbanner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
return {
  isLoad:false
}
  },
  components:{
    Swiper, 
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoad)
      this.$emit("swiperImageLoad")
      this.isLoad=true
    }
    
  }
}
</script>
<style>

</style>