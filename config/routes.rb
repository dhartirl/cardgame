Rails.application.routes.draw do
  resources :rooms, only: [:index, :show]

  root 'rooms#index'


  mount ActionCable.server => '/cable'
end
