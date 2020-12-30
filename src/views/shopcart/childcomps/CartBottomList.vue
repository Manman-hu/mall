<template>
  <div class="bottom-list">
      <div class="bottom-select" >
        <check-button class="bottom-content"  :isactive="isselectall" @click.native="selectall"></check-button>
        <span>全选</span>
      </div>
      
      <span class="price">合计:{{totalprice}}</span>
      <div class="calculate">去计算<span v-show="this.calnumber!=0">({{calnumber}})</span></div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name:'CartBottomList',
  components:{
    CheckButton
  },
  
  computed:{
    totalprice(){
    let total=  this.$store.state.carList.filter(item=>{
      
       return item.isactive
     }).reduce((preValue,item)=>{
     
        return preValue+item.count*item.realprice
      },0)
      return "￥" +total.toFixed(2)
    },
    calnumber(){
      return this.$store.state.carList.filter(item=>item.isactive).length
    },
    isselectall(){
      if(this.$store.state.carList.length===0) return false
      return this.$store.state.carList.filter(item=>item.isactive).length===this.$store.state.carList.length
      // return !this.$store.state.carList.find(item=>!item.isactive)
    }
  },
  methods:{
    selectall(){
      if(this.isselectall){
       this.$store.state.carList.forEach(element => {
         element.isactive=false
       });
      }else{
        this.$store.state.carList.forEach(element => {
         element.isactive=true
       });
      }
    }
  }

}
</script>
<style scoped>
.bottom-list{
  /* position: relative; */
background: #eee;
  height: 40px;
  display: flex;
  line-height: 40px;
  /* bottom: 40px; */
  

}
.bottom-select{
   display: flex;
    align-items: center;
    margin:0 10px;
    width: 60px;
  
}
.bottom-content{
    width: 20px;
    height: 20px;
    line-height: 20px;
}
.price{
  margin:0 30px;
  font-size: 17px;
  flex:1
}
.calculate{
  width: 100px;
  background: red;
  color:#fff;
  text-align: center;
}

</style>