Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  post '/cart/:user_id/:product_id' => 'users#cartadd'
  delete '/cart/:user_id/:product_id' => 'users#cartremove'
  
  resources :users
  resources :products
  
end