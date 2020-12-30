<template>
   <div id="detail">
     <detail-nav-bar @titleclick="titleclick" class="detail-nav" ref="detailnav"></detail-nav-bar>
   <scroll class="content" 
          ref="scroll"
          @scroll="scroll"
          :prop-type="3"
          > 
     <detail-swiper :ctopImages="topImages"></detail-swiper>
     <detail-base-info :cgoods="goods"></detail-base-info>
     <detail-shop-info :shop="shop"></detail-shop-info>
     <detail-goods-info :cdetailinfo="detailinfo" @imgload="imgload"></detail-goods-info>
     <detail-params-info :cdetailparams="detailparams" ref="param"></detail-params-info>
     <detail-comments-info :cdetailcomments="detailcomments" ref="comment"></detail-comments-info>
     <goods-list :goods="detailrecommends" class="goods-recommends" ref="recommend"></goods-list>
    </scroll>
     <back-top @click.native="backclick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addtocar="addtocar"></detail-bottom-bar>
    <toast></toast>
    </div>
</template>
<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseInfo from './childcomps/DetailBaseInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailParamsInfo from './childcomps/DetailParamsInfo'
import DetailCommentsInfo from './childcomps/DetailCommentsInfo'
import DetailBottomBar from './childcomps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from  'components/content/goodslist/GoodsList'
// import BackTop from 'components/content/backtop/BackTop'

import {getDetail,getRecommend,Goods,Shop,Params} from 'network/detail.js'

import {debounce} from 'common/utils.js'

import {imgloadlistenerMix,backtopMix} from 'common/mixin'

import {mapActions} from 'vuex'

import Toast from 'components/common/toast/Toast'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentsInfo,
    DetailBottomBar,
      
    Scroll,
    GoodsList,
    // BackTop

    Toast

  },
  mixins:[imgloadlistenerMix,backtopMix],
  created(){
    this.iid=this.$route.params.iid
    // console.log(this.iid);
    getDetail(this.iid).then((res)=>{
      const data=res.result
     
      //轮播图数据
      this.topImages=data.itemInfo.topImages;
      // console.log(res);
      //商品数据销量收藏等
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //店铺信息
      this.shop=new Shop(data.shopInfo)
      //商品详细数据
      this.detailinfo=data.detailInfo
      //商品参数
      this.detailparams=new Params(data.itemParams.info,data.itemParams.rule)
      //评论信息
      if(data.rate.cRate!==0){
        this.detailcomments=data.rate.list[0]
      }
      
      })

      getRecommend().then(res=>{
        this.detailrecommends=res.data.list
        // console.log( this.detailrecommends);
      })
  },
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailinfo:{},
      detailparams:{},
      detailcomments:{},
      detailrecommends:[],
      themeTopYs:[],
      currentIndex:0,

      // isShowBackTop:false,
      

      imgloadlistener:null

    }
  },
  methods:{
    ...mapActions(['addcar']),
    imgload(){
      this.$refs.scroll.refresh()
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);
    },
    titleclick(index){
      console.log(index);
      this.$refs.scroll. scrollTo(0,-this.themeTopYs[index],200)
    },
    scroll(position){
      let positony=-position.y;
      // 滚动位置大于一个值，显示
      this.isShowBackTop=(-position.y)>1000

      const length=this.themeTopYs.length
      for(let i=0;i<=length;i++)      
        {
          if(this.currentIndex!=i&&((i<length-1&&(positony>=this.themeTopYs[i] && positony<this.themeTopYs[i+1]))||(i==length-1&&positony>=this.themeTopYs[i]))){
            this.currentIndex=i
            this.$refs.detailnav.currentIndex=this.currentIndex
            // console.log(this.currentIndex);
          }
        }        
    },
    // backclick(){
    //   this.$refs.scroll.scrollTo(0,0,500)
    // }
    addtocar(){
      console.log("---");
      const shopcarinfo={}
      shopcarinfo.image=this.topImages[0];
      shopcarinfo.title=this.goods.title;
      shopcarinfo.realprice=this.goods.realPrice;
      shopcarinfo.desc=this.goods.desc;
      shopcarinfo.iid=this.iid;
      shopcarinfo.count=0
      // this.$store.dispatch('addcar',shopcarinfo).then(res=>{
      //   console.log(res);
      // })
      this.addcar(shopcarinfo).then(res=>{
        this.$toast.show()
      })
    }
  },
  mounted(){

  },
  destroyed(){
     this.$bus.$off('itemImageLoad',this.imgloadlistener)
  }
}
</script>
<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .detail-nav{
      position: fixed;     
      left: 0;
      right: 0;
      top: 0;
      background: white;
      z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom:49px;
   
  }
  .goods-recommends{
    margin-top:20px;
    border-top:5px solid #f2f5f8
  }
</style>