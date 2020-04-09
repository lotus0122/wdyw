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
end

end
