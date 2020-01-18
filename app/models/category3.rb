class Category3 < ApplicationRecord
    # validates :category3_name, presence: true
    has_many :contents
end
