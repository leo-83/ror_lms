class Course < ApplicationRecord

    validates :title, :desc, :ctype, presence: true
  end