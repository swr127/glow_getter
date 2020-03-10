Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  post '/cart' => 'users#cartadd'
  
  resources :users
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
