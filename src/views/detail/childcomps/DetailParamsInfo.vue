<template>
  <div class="param-info" v-if="Object.keys(cdetailparams).length!==0">
    <table class="info-size" v-for="(item,index) in cdetailparams.sizes" :key="index">
      <tr v-for="(itemsize,indexsize) in item" :key="indexsize"><td  v-for="(itemsizecon,indexsizecon) in itemsize" :key="indexsizecon">{{itemsizecon}}</td></tr>
    </table>
   
    <table class="info-param">
      <tr v-for="(itemparams,indexparams) in cdetailparams.infos" :key="indexparams">
        <td class="info-param-key">{{itemparams.key}}</td>
        <td class="param-value">{{itemparams.value}}</td>
        </tr>
    </table>
<div v-if="cdetailparams.image">
  <img :src="cdetailparams.image" alt="">
</div>
      
    

  </div>
</template>
<script>
export default {
  name:'DetailParamsInfo',
  props:{
    cdetailparams:{
      type:Object,
      default(){
        return {}
      }
    }
  } 
}
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    /* 设置width100% */
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }

</style>