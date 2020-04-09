class Admin::MainCategoriesController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @main_category = MainCategory.new(main_category_params)
    @main_category.save
end

def destroy
    @main_category = MainCategory.find(params[:id])
    @main_category.destroy
end

private
def main_category_params
    params.require(:main_category).permit(:main_category_name)
end

end
