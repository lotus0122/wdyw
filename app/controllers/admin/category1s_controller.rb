class Admin::Category1sController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @category1 = Category1.new(category1_params)
    @category1.save
end

def destroy
    @category1 = Category1.new(params[:id])
    @category1.destroy
end

private
def category1_params
    params.require(:category1).permit(:category1_name)
end

end
