class Category5 < ApplicationRecord
    # validates :category5_name, presence: true
    has_many :contents
end
