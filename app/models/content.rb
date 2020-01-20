class Content < ApplicationRecord
    attachment :image

    belongs_to :main_category
    belongs_to :category1
    belongs_to :category2
    belongs_to :category3
    belongs_to :category4
    belongs_to :category5
    belongs_to :category6
end
