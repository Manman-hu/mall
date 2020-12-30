<template>
  <div class="toast" v-show="isshow">
{{message}}
  </div>
</template>
<script>
export default {
  name:'Toast',
  data(){
    return {
      message:'',
      isshow:false
    }
  },
  methods:{
    show(str="加入购物车成功",duration=2000){
      this.message=str
      this.isshow=true
      setTimeout(()=>{
        this.isshow=false
      },duration)
    }
  }
  
}
</script>

<style scoped>
.toast{
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding:8px 10px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  z-index:999

}


</style>