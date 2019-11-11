class Admin::Category7sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category7 = Category7.new(category7_params)
        @category7.save
    end
end
