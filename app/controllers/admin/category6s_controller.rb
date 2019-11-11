class Admin::Category6sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category6 = Category6.new(category6_params)
        @category6.save
    end
end
