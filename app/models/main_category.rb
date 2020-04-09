class MainCategory < ApplicationRecord
    # validates :main_category_name, presence: true
    has_many :contents
end
