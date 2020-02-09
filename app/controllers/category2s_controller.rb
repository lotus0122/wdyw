class Category2sController < ApplicationController

def show
    @content = Content.find(params[:id])
    @contents = Content.all
end
    
end
