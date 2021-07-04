Rails.application.routes.draw do
  
  resources :dojos do
    resources :senseis do
    resources :students
  end
end


get '/senseis', to: 'senseis#all_senseis'
get '/students', to: 'students#all_students'

resources :students
resources :senseis
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
