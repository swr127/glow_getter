Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  post '/cart/:product_id' => 'users#cartadd'
  get '/cart' => 'user#cart'
  delete '/cart/:product_id' => 'users#cartremove'
  
  resources :users
  resources :products
  
end