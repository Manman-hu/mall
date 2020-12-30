<template>
  <div class="grid-view" ref="gridview">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GridView',
  props:{
    cols:{
      type:Number,
      default:2
    },
    //整个大组件的左右边距
    hmargin:{
      type:Number,
      default:8
    },
    //整个大组件的上下编剧
    vmargin:{
      type:Number,
      default:8
    },
    //每个子组件的右边距
    itemspace:{
      type:Number,
      default:8
    },
    //子组件的上边距
    linespace:{
      type:Number,
      default:8
    }
  },
  mounted(){
    //这里不用加括号
    setTimeout(this.autolayout,20)
  },
  updated(){
    this.autolayout()
  },
  methods:{
    autolayout(){
      let element=this.$refs.gridview
      let children=element.children
      element.style.padding=`${this.vmargin}px ${this.hmargin}px`
      //clientwidth表示content和两个padding的宽度和
      let itemwidth=(element.clientWidth-2*this.hmargin-(this.cols-1)*this.itemspace)/this.cols;
     for (let i = 0; i < children.length; i++) {
        children[i].style.width=itemwidth+'px'
        if(i>=this.cols){
          children[i].style.marginTop=this.linespace+'px'
        }
        //除了最后一列元素，都不用
        if((i+1)%this.cols!==0){
          children[i].style.marginRight=this.itemspace+'px'
        }  
    }
  }
  } 
}
</script>
<style scoped>
 .grid-view {
    display: flex;
    flex-wrap: wrap;
  }

</style>