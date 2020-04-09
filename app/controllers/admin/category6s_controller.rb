class Admin::Category6sController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @category6 = Category6.new(category6_params)
    @category6.save
end

def destroy
    @category6 = Category6.find(params[:id])
    @category6.destroy
end

private
def category6_params
    params.require(:category6).permit(:category6_name)
end

end
