class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save!
      login(@user) # APP CONTROLLER
      render 'api/users/show' # make JSON JBUILDER
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

end