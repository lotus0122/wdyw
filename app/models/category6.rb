class Category6 < ApplicationRecord
    # validates :category6_name, presence: true
    has_many :contents
end
