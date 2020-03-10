class UsersController < ApplicationController
  before_action :authorize_request, except: [:create, :index]
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user, include: :products
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # POST /users/1/products
  def cartadd 
    @user = User.find(params[:id])
    @product = Product.find(params[:id])
    @user.products.push(products)
  end

  # DELETE /users/1/products
  def cartremove 
    @user = User.find(params[:id])
    @product = Product.find(params[:id])
    @user.products.delete(@product)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
