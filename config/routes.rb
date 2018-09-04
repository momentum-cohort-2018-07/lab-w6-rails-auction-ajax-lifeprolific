Rails.application.routes.draw do

  get 'items/check_changes', :to => 'items#check_changes'
  resources :items
  resources :bids

  root 'items#index'
end
