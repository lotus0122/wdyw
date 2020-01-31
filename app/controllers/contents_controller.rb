class ContentsController < ApplicationController

def top
    @contents = Content.all
end

def about
end

def index
end

def show
    @contents = Content.all
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
