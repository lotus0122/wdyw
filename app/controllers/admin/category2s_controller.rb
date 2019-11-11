class Admin::Category2sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category2 = Category2.new(category2_params)
        @category2.save
    end
end
