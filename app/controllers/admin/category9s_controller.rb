class Admin::Category9sController < ApplicationController
    protect_from_forgery :expect => [:create]
    # before_action :authenticate_admin!

    def create
        @category9 = Category9.new(category9_params)
        @category9.save
    end
end
