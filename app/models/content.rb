class Content < ApplicationRecord
    attachment :image

    belongs_to :main_category, optional: true
    belongs_to :category1, optional: true
    belongs_to :category2, optional: true
    belongs_to :category3, optional: true
    belongs_to :category4, optional: true
    belongs_to :category5, optional: true
    belongs_to :category6, optional: true
end
