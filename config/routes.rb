Rails.application.routes.draw do
 
  namespace :api do 
    resources :users 
    
    resources :courses do 
      resources :enrollments
      get '/unenrolled', to: 'enrollments#unenrolledUsers'
    end

    get '/:id/courseUsers', to: 'courses#courseUsers'
    get '/:id/userCourses', to: 'users#userCourses'

  end
  
end