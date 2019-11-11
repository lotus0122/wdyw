class Admin::Category5sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category5 = Category5.new(category5_params)
        @category5.save
    end
end
