class Admin::Category10sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category10 = Category10.new(category10_params)
        @category10.save
    end
end
