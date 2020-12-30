<template>
  <div class="icon-select" :class="{active:isactive}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name:'CheckButton',
//   data(){
// return {
//   value:this.isactive
// }
//   },
props:{
  isactive:{
    type:Boolean,
    default:false
  }
},
//   methods:{
//     itemclick(){
// this.value=!this.value
//     }
//   }
}
</script>
<style scoped>
.icon-select{
  height: 20px;
width: 20px;
border-radius: 50%;
border:2px solid #ccc;
}
/* .icon-select img{
height: 20px;
width: 20px;
border-radius: 50%;
border:2px solid #ccc;
cursor: pointer;
} */
.active{
  background: red;
  border-color: red;
}

</style>