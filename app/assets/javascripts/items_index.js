console.log("items index javascript")

$(document).on("turbolinks:load", check_changes());

function check_changes() {
  setInterval(() => {
    console.log("check changes")
      $.ajax({
        type: "GET",
        url: "/items/check_changes"
    });
    // $("#high_bid_<%= @bid.item_id %>").text("<%= number_to_currency(@bid.item.highest_bid_amount) %>")
  }, 15000);
}