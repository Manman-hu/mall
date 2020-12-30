<template>
<div id="category">
  <nav-bar class="nav-bar">
    <template v-slot:center><span>商品分类</span></template>
  </nav-bar>
<div class="categorymain">
    <tab-control-menue :ccategories="categories" @menueclick='menueclick' :currentindex="currentindex"></tab-control-menue>
  <scroll id="tab-content" ref="scroll">
    <tab-content-category :subcategorydata="showSubcategory" @imgload="imgload"></tab-content-category>
    <tab-control :titles="['综合','新品','销量']" @tabclick="tabClick"></tab-control>
    <tab-content-detail :catedetail="catedetail" @imgload="imgload"></tab-content-detail>
  </scroll>
</div>


  
</div>

</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'

import TabControlMenue from './childcomps/TabControlMenue'
import TabContentCategory from './childcomps/TabContentCategory'
import TabContentDetail from './childcomps/TabContentDetail'
 
import {getMenueData,getSubcategory,getCategorydetail} from 'network/category'
import { mapActions } from 'vuex'

import {POP,SELL,NEW} from 'common/const'
import {tabControlMixin} from 'common/mixin'
export default {
  name:'Category',
  mixins:[tabControlMixin],
  components:{
    NavBar,
    Scroll,
    TabControl,
    TabControlMenue,
    TabContentCategory,
    TabContentDetail
  },
  data(){
    return {
      categories:[],
      categorydata:{},
      currentindex:-1
      
    }
  },
  created(){
    //获得菜单列表中的数据
    this.getcatogerydata();
  },
  mounted(){

  },
  computed:{
 showSubcategory() {
		    if (this.currentindex === -1) return {}
        return this.categorydata[this.currentindex].subcate
      },
      catedetail() {
		    if (this.currentindex === -1) return []
		    return this.categorydata[this.currentindex].catedetail[this.currentType]
      }
  },
  methods:{
    getcatogerydata(){
      getMenueData().then(res=>{
        //获得catagory数据
        this.categories=res.data.category.list      
        for(let i=0;i<this.categories.length;i++){
          this.categorydata[i]={
            subcate:{},
            catedetail:{
              POP:[],
              NEW:[],
              SELL:[]
            }
          }
        }
      this.getsubcategory(0) 
      console.log(this.categorydata);
  })
},
    //点击对应的category
    getsubcategory(index){
      this.currentindex=index;
      const maitKey=this.categories[this.currentindex].maitKey;
      getSubcategory(maitKey).then(res=>{
        this.categorydata[index].subcate=res.data
        this.categorydata={...this.categorydata}
       
        this.getcategoryDetail(POP)
        this.getcategoryDetail(NEW)
        this.getcategoryDetail(SELL)
        // console.log(this.categorydata)
      })
    },
      getcategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey=this.categories[this.currentindex].miniWallkey
   
        // 2.发送请求,传入miniWallkey和type
		    getCategorydetail(miniWallkey, type).then(res => {
		      // 3.将获取的数据保存下来
		      this.categorydata[this.currentindex].catedetail[type] = res
          this.categorydata = {...this.categorydata}
        })
      },



      //点击事件
      menueclick(index){
        this.getsubcategory(index)
      },
      imgload(){
      this.$refs.scroll.refresh()
      }
  }
}
</script>
<style scoped>
#category{
  /* width: 100vw; */
  height: 100vh;

}

.categorymain{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
}
.nav-bar{
  color: #fff;
  background: var(--color-tint);

}
  #tab-content {
    height: calc(100vh - 44px - 49px);
    flex: 1;
    overflow: hidden;
  }

</style>