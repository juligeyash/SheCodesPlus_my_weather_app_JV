function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let citySearchedElement = document.querySelector("#city");
  citySearchedElement.innerHTML = searchInput.value;
}

let submitSearchElement = document.querySelector("#city-search");
submitSearchElement.addEventListener("submit", citySearch);
