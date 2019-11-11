class Admin::Category4sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category4 = Category4.new(category4_params)
        @category4.save
    end
end
