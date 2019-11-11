class Admin::Category8sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category8 = Category8.new(category8_params)
        @category8.save
    end
end
