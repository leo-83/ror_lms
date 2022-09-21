class Api::EnrollmentsController < ApplicationController
  before_action :set_course
  before_action :set_enrollment, except: [:index, :create]

  def index
    render json: @course.enrollments
  end

  def show
    render json: @enrollment
  end

  def create
    @enrollment = @course.enrollments.new(enrollment_params)
    if @enrollment.save
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @enrollment.update(enrollment_params)
      render json: @enrollment
    else
      render json: { errors: @enrollment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @enrollment.destroy
    render json: { message: 'Unenrolled' }
  end

  private 
    def enrollment_params
      params.require(:enrollment).permit(:user_id)
    end

    def set_course
      @course = Course.find(params[:course_id])
    end

    def set_enrollment
      @enrollment = @course.enrollments.find(params[:id])
    end
end