class Course < ApplicationRecord
  has_many :enrollments, dependent: :destroy
  has_many :users, through: :enrollments
  
  validates :title, :desc, :ctype, presence: true
end