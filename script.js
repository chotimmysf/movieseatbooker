const container = document.querySelector(".container");
const seats = document.querySelectorAll(
  ".row .seat:not(.occupied) .seat:not(.coronavirus)"
);
const count = document.getElementById("count");
const count = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row.seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEvenetListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied") &&
    !e.target.classList.contains("coronavirus")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
