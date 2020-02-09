class Admin::Category3sController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @category3 = Category3.new(category3_params)
    @category3.save
end

def destroy
    @category3 = Category3.find(params[:id])
    @category3.destroy
end

private
def category3_params
    params.require(:category3).permit(:category3_name)
end

end
