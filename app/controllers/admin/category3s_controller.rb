class Admin::Category3sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category3 = Category3.new(category3_params)
        @category3.save
    end
end
