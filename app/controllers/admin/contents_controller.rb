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
    content = Content.find(params[:id])
    content.update(content_params)
    redirect_to 
end
    
def destroy
end

end
