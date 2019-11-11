Rails.application.routes.draw do
  
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :contents, only: [:index, :show, :top, :about]
  get 'top' => 'contents#top'
  get 'about' => 'contents#about'

  namespace :admin do
    resources :contents, only: [:index, :show, :top, :about, :new, :edit, :create, :update, :destroy]
    get 'top' => 'contents#top'
    get 'about' => 'contents#about'
  end

end
