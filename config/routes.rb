Rails.application.routes.draw do
 
  namespace :api do 
    resources :users 
    
    resources :courses do 
      resources :enrollments
      get '/unenrolled', to: 'enrollments#unenrolledUsers'
    end


  end
  
end