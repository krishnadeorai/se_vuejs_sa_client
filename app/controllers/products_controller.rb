class ProductsController < ApplicationController
  def index
  	respond_to do |format|
      format.html
    end
  end

  def get_products_list
  	if params['query'].blank?
  		result = ApiCall.new('/products', '').get_list
  	else
  		result = ApiCall.new('/products', params).get_list
  	end
    render :json => result.to_json
  end

  def details
  	result = ApiCall.new('/products', params).get_product
    render :json => result.to_json
  end
end
