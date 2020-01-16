class Admin::ContentsController < ApplicationController
    #before_action :authenticate_admin!

def index
end

def new
    @contents = Content.all
    @content = Content.new
    @main_categories = MainCategory.all.order(id: "DESC")
    @main_category = MainCategory.new
    @category1s = Category1.all.order(id: "DESC")
    @category1 = Category1.new
    @category2s = Category2.all.order(id: "DESC")
    @category2 = Category2.new
    @category3s = Category3.all.order(id: "DESC")
    @category3 = Category3.new
    @category4s = Category4.all.order(id: "DESC")
    @category4 = Category4.new
    @category5s = Category5.all.order(id: "DESC")
    @category5 = Category5.new
    @category6s = Category6.all.order(id: "DESC")
    @category6 = Category6.new
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
