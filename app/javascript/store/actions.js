import axios from 'axios'
import {API_BASE} from '../config'

import {
  FILTER_PRODUCTS,
  FILTER_PRODUCTS_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
} from './mutation-types'

export const productActions = {
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/products/get_products_list`).then(response => { 
      commit(ALL_PRODUCTS_SUCCESS, JSON.parse(response.data))
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/products/details?id=${payload}`).then(response => {
      console.log(payload, response.data)
      commit(PRODUCT_BY_ID_SUCCESS, JSON.parse(response.data))
    })
  },
  filterProducts ({commit}, payload) {
    commit(FILTER_PRODUCTS)
    axios.get(`${API_BASE}/products/get_products_list?query=${payload}`,).then(response => {
      commit(FILTER_PRODUCTS_SUCCESS, JSON.parse(response.data))
    })
  }
}
