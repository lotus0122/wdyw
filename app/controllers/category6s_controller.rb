class Category6sController < ApplicationController

def show
    @contents = Content.all
    @content = Content.find(params[:id])
end

end
