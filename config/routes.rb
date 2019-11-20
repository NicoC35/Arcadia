Rails.application.routes.draw do
  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  get 'event' , to: 'event#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
