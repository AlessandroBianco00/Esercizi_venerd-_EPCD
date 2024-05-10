const addressBarContent = new URLSearchParams(location.search);
const idProdotto = addressBarContent.get("eventId");

const showSingleProduct = function (book) {
  const rowDiv = document.querySelector(".row");
  const divColumn = document.createElement("div");
  divColumn.classList.add("col-md-6");
  divColumn.innerHTML = `<div class="card">
    <img src="${book.imageUrl}" class="card-img-top" alt="dettaglio foto">
    <div class="card-body">
      <h5 class="card-title">Prodotto: ${book.name} </h5>
      <p class="card-text" id="description">${book.description}</p>
      <div class="d-flex justify-content-between text-secondary">
            <p>${book.brand}</p>
            <p>${book.price} $</p>
        </div>
    </div>
  </div>`;
  rowDiv.appendChild(divColumn);
};

const getSinglePhoto = function (id) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGVhODgxODQ0MjAwMTUzNzU4YWYiLCJpYXQiOjE3MTUzMzA3MjgsImV4cCI6MTcxNjU0MDMyOH0.j3kwJ2NAzhHqXGtp3lVV4Rg0N2jFaH7AEhSxBm4Ap_Y",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        switch (response.status) {
          case 400:
            alert("Error 400, Bad request");
            break;
          case 401:
            alert("Error 401, Non autorizzato");
            break;
          case 404:
            alert("Error 404, Not Found");
            break;
          case 500:
            alert("Error 500, Internal server erroe");
            break;
        }
        throw new Error("Errore " + response.status);
      }
    })
    .then((obj) => {
      showSingleProduct(obj);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

getSinglePhoto(idProdotto);
