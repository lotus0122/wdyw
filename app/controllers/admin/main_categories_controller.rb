class Admin::MainCategoriesController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @main_category = MainCategory.new(main_category_params)
        @main_category.save
    end
end
