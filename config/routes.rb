Rails.application.routes.draw do
  resources :rooms, only: [:index, :show]

  root 'rooms#index'
end
