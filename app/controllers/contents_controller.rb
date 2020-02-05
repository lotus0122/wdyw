class ContentsController < ApplicationController

def top
    @contents = Content.all
end

def about
end

def index
end

def show
    @content = Content.find(params[:id])
    @contents = Content.all
    @category1 = Content.find_by(category1_id: params[:category1_id])
    @category1s = Category1.all
    @category2 = Content.find_by(category2_id: params[:category2_id])
    @category2s = Category2.all
    @category3 = Content.find_by(category3_id: params[:category3_id])
    @category3s = Category3.all
    @category4 = Content.find_by(category4_id: params[:category4_id])
    @category4s = Category4.all
    @category5 = Content.find_by(category5_id: params[:category5_id])
    @category5s = Category5.all
    @category6 = Content.find_by(category6_id: params[:category6_id])
    @category6s = Category6.all
    
    # render :json => {
        # name: @content.category1.category1_id
        # name2: @content2.category2.category2_id
        # name3: @content3.category3.category3_id
        # name4: @content4.category4.cotegory4_id
        # name5: @content5.category5.cotegory5_id
        # name6: @content6.category6.cotegory6_id
    # }
    # 要修正
    # jsonに関連づいた記述
end

end
