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
end

end
