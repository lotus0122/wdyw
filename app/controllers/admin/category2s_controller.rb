class Admin::Category2sController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @category2 = Category2.new(category2_params)
    @category2.save
end

def destroy
    @category2 = Category2.find(params[:id])
    @category2.destroy
end

private
def category2_params
    params.require(:category2).permit(:category2_name)
end

end
