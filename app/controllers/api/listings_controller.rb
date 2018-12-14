class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.find(params[:id])
    # @listing = Listing.with_attached_photos.find(params[:id])
    render 'api/listings/show'
  end

  def index
    @listings = Listing.all
    render 'api/listings/index'
  end
end