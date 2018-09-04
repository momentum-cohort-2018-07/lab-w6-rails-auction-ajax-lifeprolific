class BidsController < ApplicationController

  def create
    @bid = Bid.new(bid_params)
    @bid.save
  end


  private
    def bid_params
      params.require(:bid).permit(:amount, :item_id)
    end
end

