document.addEventListener("DOMContentLoaded", function () {

const fundingSearch = document.getElementById("fundingSearch");
const fundingCards = document.querySelectorAll(".funding-card");

if (!fundingSearch) {
return;
}

fundingSearch.addEventListener("input", function () {

const searchTerm = this.value.toLowerCase().trim();

fundingCards.forEach(function (card) {

const cardText = card.textContent.toLowerCase();

if (cardText.includes(searchTerm)) {
card.style.display = "";
} else {
card.style.display = "none";
}

});

});

});


            