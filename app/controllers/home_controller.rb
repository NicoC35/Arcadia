class HomeController < ApplicationController

  def index
    if !current_user
      redirect_to '/signupsurvey'
    end
  end

end