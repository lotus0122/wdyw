class Admin::ContentsController < ApplicationController
    #before_action :authenticate_admin!

def index
end

def new
    @contents = Content.all
    @content = Content.new
    @main_categories = MainCategory.all.order(id: "DESC")
    @main_categories = MainCategory.new
    @category1s = Category1s.all.order(id: "DESC")
    @category1s = Category1s.new
    @category2s = Category2s.all.order(id: "DESC")
    @category2s = Category2s.new
    @category3s = Category3s.all.order(id: "DESC")
    @category3s = Category3s.new
    @category4s = Category4s.all.order(id: "DESC")
    @category4s = Category4s.new
    @category5s = Category5s.all.order(id: "DESC")
    @category5s = Category5s.new
    @category6s = Category6s.all.order(id: "DESC")
    @category6s = Category6s.new
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
