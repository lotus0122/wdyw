class Admin::ContentsController < ApplicationController
    #before_action :authenticate_admin!

def index
end

def new
end

def create
    content = Content.new(content_params)
    content.save
    redirect_to
end
    
def update
end
    
def destroy
end

end
