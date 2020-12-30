<template>
   <div id="shop-cart">
<nav-bar class="cart-nav-bar">
  <template v-slot:center><span class="nav-title">购物车({{cartnumber}})</span></template>
</nav-bar>
<cart-list></cart-list>
<cart-bottom-list></cart-bottom-list>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childcomps/CartList'
import CartBottomList from './childcomps/CartBottomList'
import {mapGetters} from 'vuex'
export default {
  name:'Shopcart',
  components:{
    NavBar,
    CartList,
    CartBottomList
  },
  computed:{
    // cartnumber(){
    //   return this.$store.state.carList.length
    ...mapGetters(['cartnumber'])
    }
}
</script>
<style scoped>
.cart-nav-bar{
  background: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>