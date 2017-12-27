<template>
  <div class="product-details" style="width: 980px; margin: auto;">
    <div class="container">
      <div class="row">
        <div class="product-details__image" style="float:left;"">
          <img
            class="img-responsive" src="https://www.sephora.com/productimages/sku/s1995737-main-Lhero.jpg" alt="">
        </div>
        <div class="product-details__info">
          <div class="product-details__description">
            <h3>{{product['data']['attributes']['name']}}</h3>
          </div>
          <div v-if="product['data']['attributes']['under-sale'] == true" class="product-details__price-cart sale_price">
            <div class = "prdocut_sale_text"> {{product['data']['attributes']['sale-text']}} </div>
            <span class="product_price" style="text-decoration: line-through; color: gray;">${{product['data']['attributes']['price']}}</span>
            <span class="product_sale_price" style="color:red; margin-left: 10px">${{product['data']['attributes']['sale-price']}}</span>
          </div>
          <div v-else class="product-details__price-cart price">
            <span class="product_price">${{product['data']['attributes']['price']}}</span>
          </div>
          <br>
          <button class="button"><i class="fa fa-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['product']
  }
</script>

<style>
</style>
