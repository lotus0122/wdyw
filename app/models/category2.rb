class Category2 < ApplicationRecord
    # validates :category2_name, presence: true
    has_many :contents
end
