<template>
  <div class="product" style="float: left; width: 28%; height: auto; margin: 15px; position: relative;">
    <router-link :to="'/details/'+product['links']['self'].split('.com/products/')[1]" class="product-link"  style="text-decoration:none; color:black;">
      <div class="product_image" v-on:mouseover="mouseOver">
        <img class="img-responsive" src="https://www.sephora.com/productimages/sku/s1995729-main-grid.jpg" alt="">
      </div>
      <div class="product__description" style="text-align: center; word-wrap: break-word; font-size: 12px;">
        <div class="product__info">
          <small>New | LIMITED EDITION</small>
          <div>{{product['attributes']['name']}}</div>
        </div>
        <div v-if="product['attributes']['under-sale'] == true" class="product__price-cart">
          <div class = "prdocut_sale_text"> {{product['attributes']['sale-text']}} </div>
          <span clas="prdocut_sale_price" style="text-decoration: line-through; color: gray;"> ${{product['attributes']['price']}} </span>
          <span class="prdocut_price" style="color:red; margin-left: 10px"> ${{product['attributes']['sale-price']}} </span>
        </div>
        <div v-else class="product__price-cart">
          ${{product['attributes']['price']}}
        </div>
      </div>
    </router-link>
    <div v-if="product['attributes']['sold-out'] == true" class="product_oos" style="background-color:white;height: 30px; line-height:30px; text-align: center; font-weight: bold; color: gray; position: absolute; top: 50px; width: 190px; left: -25px; font-size: 12px;">
      <div class="product_oos_text">
        OUT OF STOCK
      </div>
    </div>
    <div v-else v-show="isShow" class="product_cart" style="background-color:red;height: 30px; line-height:30px; text-align: center; font-weight: bold; color: white; position: absolute; top: 110px; width: 190px; left: -25px; font-size: 12px;">
      <div class="product_oos_text">
        ADD TO BAG
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-item',
    props: ['product'],
    data () {
      return {
        isShow: false
      }
    },
    methods:{
      mouseOver () {
        isShow = !isShow
      }
    }
  }
</script>