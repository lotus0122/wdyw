class Category1 < ApplicationRecord
    # validates :category1_name, presence: true
    has_many :contents
end
