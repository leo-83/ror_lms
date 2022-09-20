class User < ApplicationRecord

    validates :first_name, :last_name, :img, presence: true
  end