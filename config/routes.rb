Rails.application.routes.draw do
  #get 'products' => 'products#index'
  root to: 'products#index'

  get 'products/get_products_list' => 'products#get_products_list'
  get 'products/details' => 'products#details'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
