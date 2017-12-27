<template>
  <div class="products" style="width: 77%; margin: auto;">
    <div class="pagination" style="float: right; margin-left: 20px;">
      <template v-for="(value, key, index) in products['links']">
        <button class="btn btn-default" style="text-transform: capitalize; margin-right:10px;" @click="applyPagination(value.split('products?')[1])"> {{ key }}
        </button>
      </template>
    </div>
    <div class="product_sort" style="height: 50px; float: right;">
      <div class="sort_option" style = "float: right; margin-bottom: 10px;">
        <label style="margin-right: 10px;"> Sort By </label>
        <select id="sort_value" v-on:change="applyFilter" v-model="selected">
          <option disabled value="">Please select one</option>
          <option>Price Low To High</option>
          <option>Price High To Low</option>
        </select>
      </div>
    </div>
    <div class = 'product_filter' style="float:left; width:20%; margin-right: 20px;">
      <label><strong>Category</strong></label>
      <ul style="padding:0;">
        <li style = "display: block;">
          <input class='filter' type="checkbox" value="Makeup" v-model="categoryChecked">
          <label for="tool">Makeup</label>
        </li>
        <li style = "display: block;">
          <input type="checkbox" class='filter' value="Tool" v-model="categoryChecked">
          <label for="tool">Tool</label>
        </li>
      </ul>
      <label><strong>Price</strong></label>
      <ul style="padding:0;">
        <li style = "display: block;">
          <input type="checkbox" class='filter' value="0-2000" v-model="priceChecked">
          <label for="0-2000">Under 2000</label>
        </li>
        <li style = "display: block;">
          <input type="checkbox" class='filter' value="2001-3000" v-model="priceChecked">
          <label for="2001-3000">Between 2001 and 3000</label>
        </li>
        <li style = "display: block;">
          <input type="checkbox" class='filter' value="3001-4000" v-model="priceChecked">
          <label for="3001-4000">Between 3001 and 4000</label>
        </li>
        <li style = "display: block;">
          <input type="checkbox" class='filter' value="4001-5000" v-model="priceChecked">
          <label for="4001-5000">Between 4001 and 5000</label>
        </li>
      </ul>
      <span style="display:none" id="filter_value">{"price": {{priceChecked}}, "category": {{categoryChecked}} }</span>
      <button class="button" @click="applyFilter"><i class="fa fa-cart-plus"></i> Apply Filter</button>
    </div>
    <div class="container" style="float: right; width: 70%;">
      <template v-for="product in products['data']">
        <product-item :product="product"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    data () {
      return {
        selected: "",
        priceChecked: [],
        categoryChecked: []
      }
    },
    components: {
      'product-item': ProductItem
    },
    methods: {
      applyPagination: function (pagination_url) {
        var pagination_url_decode = decodeURI(pagination_url).split('&')
        var limit = pagination_url_decode['0'].split('=')['1']
        var offset = pagination_url_decode['1'].split('=')['1']
        console.log("limit " + limit)
        console.log("offset " + offset)
        this.$store.dispatch('filterProducts', JSON.stringify({"limit": limit, "offset": offset}))
      },
      applyFilter: function () {
        var filter_data = JSON.parse(document.getElementById("filter_value").innerHTML)
        var e = document.getElementById("sort_value")
        var sort_data = e.options[e.selectedIndex].text
        var query_param = {}
        var call_api_status = false
        if(filter_data['category'].length > 0){
          query_param["category"] = filter_data['category'].join(',')
          call_api_status = true
        }else if(filter_data['price'].length > 0){
          query_param["price"] = filter_data['price'].join(',')
          call_api_status = true
        }
        if(sort_data != "" && sort_data != undefined && sort_data != 'Please select one'){
          query_param["sort"] = sort_data
          call_api_status = true
        }
        console.log(query_param)
        if(call_api_status == true){
          this.$store.dispatch('filterProducts', JSON.stringify(query_param))
        }else{
          console.log('No filter applied')
        }
      }
    }
  }
</script>

<style>
</style>
