Rails.application.routes.draw do
  
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :contents, only: [:index, :show, :top, :about]
  get 'top' => 'contents#top'
  get 'about' => 'contents#about'

  namespace :admin do
    resources :contents, only: [:index, :show, :top, :about, :new, :edit, :create, :update, :destroy]
    resources :main_categories, only: [:create, :destroy]
    resources :category1s, only: [:create, :destroy]
    resources :category2s, only: [:create, :destroy]
    resources :category3s, only: [:create, :destroy]
    resources :category4s, only: [:create, :destroy]
    resources :category5s, only: [:create, :destroy]
    resources :category6s, only: [:create, :destroy]
    get 'top' => 'contents#top'
    get 'about' => 'contents#about'
  end


end
