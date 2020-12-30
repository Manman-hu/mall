<template>
   <div id='home'>
     <nav-bar class="home-nav">
       <template v-slot:center>购物街</template>
     </nav-bar>
      <tab-control :titles="['流行','新款','精选']"                 
                  @tabclick="tabclick" 
                  ref="tabControl1"
                  class="tab-control"
                  v-show="isTabFixed"> </tab-control>
    <scroll class="content" 
            ref="scroll" 
            @scroll="scrollcontent" 
            :probe-type="3" 
            :pull-up-load="true" 
            @pullingup="loadmore">
      
    <home-swiper :cbanner='banner' @swiperImageLoad="swiperImageLoad"></home-swiper>
     <recommend :crecommend="recommend" />
     <feature-view />
     <tab-control :titles="['流行','新款','精选']"                 
                  @tabclick="tabclick" 
                  ref="tabControl"
               > </tab-control>
     <goods-list :goods="showGoods"></goods-list>
    
    </scroll>
    <back-top @click.native="backclick" v-show="isShowBackTop"></back-top>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
// import BackTop from 'components/content/backtop/BackTop'

import HomeSwiper from './childcomps/HomeSwiper'
import Recommend from './childcomps/Recommend'
import FeatureView from './childcomps/FeatureView'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils.js'
import {imgloadlistenerMix,backtopMix} from 'common/mixin'

export default {
  name:'Home',
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop,

   HomeSwiper,
   Recommend,
   FeatureView
  },
   mixins:[imgloadlistenerMix,backtopMix],
  data(){
    return {
      // result:null
      recommend:[],
      banner:[],

      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currenttab:'pop',
      // isShowBackTop:false,
      offSetTop:0,
      isTabFixed:false,
      saveY:0,

      imgloadlistener:null
    }
  },
  computed:{
    showGoods(){
return this.goods[this.currenttab].list
    }
  },
  created(){
    //1请求首页数据
    this.getHomeMultidata()
    //2请求商品列表数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
//3事件总线监听goodslistitem中
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.scrollY=this.$refs.scroll.getscrollY()
    this.$bus.$off('itemImageLoad',this.imgloadlistener)
  },
  methods:{
    /**
     * 防抖函数防止scroll频繁刷新,这是一个闭包timer一直在内存中
     */
    // debounce(func,delay){
    //   let timer=null;
    //   return function(...args){
    //     if(timer){
    //     clearTimeout(timer);
    //   }
    //     timer=setTimeout(()=>{
    //       func.apply(this,args)
    //     },delay)
    //   }
    // },
    /**
     * 事件
     */
    tabclick(index){
      switch(index){
        case 0:
          this.currenttab='pop'
          break
           case 1:
          this.currenttab='new'
          break
           case 2:
          this.currenttab='sell'
          break
      }
      this.$refs.tabControl.currentIndex=index;
      this.$refs.tabControl1.currentIndex=index
  
    },
    // backclick(){
    //    this.$refs.scroll.scroll.scrollTo(0,0,500)
    //   // console.log("111");
    //   // console.log(this.$refs.scroll.scroll);
    // },
    scrollcontent(position){
      this.isShowBackTop=(-position.y)>1000
      this.isTabFixed=(-position.y)>this.offSetTop
    },
    loadmore(){
      // console.log("上来加载更多 ");
      this.getHomeGoods(this.currenttab)   
    },
    swiperImageLoad(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.offSetTop=this.$refs.tabControl.$el.offsetTop
    },
   
    /**
     * 网络请求
     */
    getHomeMultidata(){
       getHomeMultidata().then(res=>
    {
      this.recommend=res.data.recommend.list
      this.banner=res.data.banner.list
    })
    },
     getHomeGoods(type){
       let page=this.goods[type].page+1
       getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          this.$refs.scroll.finishPullUp()
       })
      
     }
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}


#home{
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.tab-control{
  position:relative;
  /* top:44px; */
   z-index: 9;
}
.content{
 overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
}

/* .content{
 overflow: hidden;
  height: calc(100%-93px);
  margin-top: 44px;
} */
/* .fixed{
  position:fixed;
  left: 0;
  right: 0;
  top:44px;
} */
</style>