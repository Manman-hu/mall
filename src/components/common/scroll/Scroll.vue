<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {

  name:'Scroll',
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  mounted(){
    // console.log(this.$refs.wrapper);
    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
})
this.scroll.on('scroll',(position)=>{
  this.$emit('scroll',position)
})
this.scroll.on('pullingUp',()=>{
  // console.log("shangla");
  this.$emit('pullingup')
})
  },
  methods:{
    scrollTo(x,y,time=300){
     this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh && this.scroll.refresh()
      // console.log("-------");
    },
    getscrollY(){
      return this.scroll?this.scroll.y:0
    }
  }
}
</script>

<style  scoped>

</style>