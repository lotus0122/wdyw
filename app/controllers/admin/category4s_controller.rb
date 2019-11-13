class Admin::Category4sController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @category4 = Category4.new(category4_params)
    @category4.save
end

def destroy
    @category4 = Category4.new(params[:id])
    @category4.destroy
end

private
def category4_params
    params.require(:category4).permit(:category4_name)
end

end
