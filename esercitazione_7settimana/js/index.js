const spanYear = document.querySelector("footer span");
spanYear.innerHTML = new Date().getFullYear();

const showProducts = function (array) {
  const divCatalogo = document.querySelector("article .row");
  array.forEach((book) => {
    const divCarta = document.createElement("div");
    divCarta.classList.add("col");
    divCarta.innerHTML = `<div class="card h-100">
              <img src="${book.imageUrl}" class="card-img-top" alt="book cover">
              <div class="card-body">
                <h5 class="card-title"> ${book.name} </h5>
                <p class="card-text">${book.description}</p>
                <div class="d-flex justify-content-between text-secondary">
                    <p>${book.brand}</p>
                    <p>${book.price} $</p>
                </div>
                <div class="d-flex justify-content-between">
                <a href="dettaglio.html?eventId=${book._id}" class="btn btn-info">INFO</a>
                <a href="backoffice.html?eventId=${book._id}" class="btn btn-warning">Modifica</a>
                </div>
              </div>`;
    divCatalogo.appendChild(divCarta);
  });
  const discardButton = document.querySelectorAll(".discard-btn");
  discardButton.forEach((btn) => {
    btn.addEventListener("click", scartaLibro);
  });
  const addButton = document.querySelectorAll(".add-btn");
  addButton.forEach((btn) => {
    btn.addEventListener("click", addToCart);
  });
};

const getCatalogue = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
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
        throw new Error("Errore caricamento catalogo");
      }
    })
    .then((array) => {
      showProducts(array);
      document.getElementById("spinnerTitle").setAttribute("class", "d-none");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

getCatalogue();
