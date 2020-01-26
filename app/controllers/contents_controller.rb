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
    render :json => {
        name1: @content.category1.category1_id
        name2: @content.category2.category2_id
        name3: @content.category3.category3_id
        name4: @content.category4.cotegory4_id
        name5: @content.category5.cotegory5_id
        name6: @content.category6.cotegory6_id
    }
end

end
