class SenseisController < ApplicationController
  before_action :set_sensei, only: [:show, :update, :destroy]

  # GET /senseis
  def all_senseis
    @senseis = Sensei.all

    render json: @senseis
  end
  

  def index
    @dojo = Dojo.find(params[:dojo_id])
    @senseis = Sensei.where(dojo_id: @dojo.id)
    render json: @senseis, include: :dojo, status: :ok
  end

  # GET /senseis/1
  def show
    render json: @sensei
  end

  # POST /senseis
  def create
    @sensei = Sensei.new(sensei_params)

    if @sensei.save
      render json: @sensei, status: :created, location: @sensei
    else
      render json: @sensei.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /senseis/1
  def update
    if @sensei.update(sensei_params)
      render json: @sensei
    else
      render json: @sensei.errors, status: :unprocessable_entity
    end
  end

  # DELETE /senseis/1
  def destroy
    @sensei.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sensei
      @sensei = Sensei.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sensei_params
      params.require(:sensei).permit(:name, :image_url, :wise_quote, :dojo_id)
    end
end
