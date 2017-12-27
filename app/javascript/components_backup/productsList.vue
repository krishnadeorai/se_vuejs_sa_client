<template>
  <div class='product_list_info flex' style="width: 77%; margin: auto;">
    <div class="sort_product">
      <div class="dropdown">
        <button class="dropbtn">Price 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div> 
    </div>
    <div class='row'>
      <div class = 'product_filter' style="float:left; width:20%; margin-right: 20px;">
        <p><strong>Category</strong></p>
        <ul style="padding:0;">
          <li style = "display: block;">
           <input type="checkbox" /> Makeup 
          </li>
          <li style = "display: block;">
           <input type="checkbox" /> Tool 
          </li>
        </ul>
        <p><strong>Price</strong></p>
        <ul style="padding:0;">
          <li style = "display: block;">
           <input type="checkbox" /> Under $1000 
          </li>
          <li style = "display: block;">
           <input type="checkbox" /> Between $1001 to $2000
          </li>
          <li style = "display: block;">
           <input type="checkbox" /> Between $2001 to $3000
          </li>
          <li style = "display: block;">
           <input type="checkbox" /> Between $3001 to $4000
          </li>
          <li style = "display: block;">
           <input type="checkbox" /> Between $4001 and above
          </li>
        </ul>
      </div>
      <div class="product_list" style="float: left; width: 70%;">
          <div class="product" style="float: left; width: 190px; height: auto; margin: 15px;" v-for="list in product_lists['data']">
            <router-link to="'/details/'" class="product-link">
              <div class="product__image">
                <img
                  class="img-responsive" src="https://www.sephora.com/productimages/sku/s1995729-main-grid.jpg" alt="">
              </div>
              <div class="product__description" style="text-align: center; word-wrap: break-word; font-size: 12px;">
                <div class="product__info">
                  <small>New | LIMITED EDITION</small>
                  <div>{{list['attributes']['name']}}</div>
                </div>
                <div class="product__price-cart">
                  ${{list['attributes']['price']}}
                </div>
              </div>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'productsList',
    data () {
      return {
        product_lists: {}
      }
    },
    created: function(){
      this.getProducts();
    },
    methods: {
      getProducts: function () {
        var productsList = this;
        axios.get('/products/get_products_list')
        .then(response => {
          this.product_lists = JSON.parse(response.data)
        })
        .catch(e => {
          //this.error.push(e)
        })
      }
    }
  }
</script>