Rails.application.routes.draw do
 
  namespace :api do 
    resources :users 
    resources :courses do 
      resources :enrollments
    end
    
  end
  
end