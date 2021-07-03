Rails.application.routes.draw do
  
  resources :dojos do
    resources :senseis do 
      resources :students 
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
