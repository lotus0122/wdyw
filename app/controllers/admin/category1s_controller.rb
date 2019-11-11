class Admin::Category1sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category1 = Category1.new(category1_params)
        @category1.save
    end



end
