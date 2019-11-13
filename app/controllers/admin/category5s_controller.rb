class Admin::Category5sController < ApplicationController
    protect_from_forgery :expect => [:create, :destroy]
    # before_action :authenticate_admin!

def create
    @category5 = Category5.new(category5_params)
    @category5.save
end

def destroy
    @category5 = Category5.new(params[:id])
    @category5.destroy
end

private
def category5_params
    params.require(:category5).permit(:category5_name)
end

end
