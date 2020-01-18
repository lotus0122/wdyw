class Category4 < ApplicationRecord
    # validates :category4_name, presence: true
    has_many :contents
end
