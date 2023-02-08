document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    let guests = document.getElementById("guests").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    document.getElementById("booking-confirmation").innerHTML = 
      "Booking confirmed for " + guests + " guests, from " + checkin + " to " + checkout + ".";
  });
  