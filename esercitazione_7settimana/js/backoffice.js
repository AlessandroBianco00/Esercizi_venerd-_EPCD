/* ANNO FOOTER */
const spanYear = document.querySelector("footer span");
spanYear.innerHTML = new Date().getFullYear();

/* FETCH FORM */

const nameInput = document.getElementById("productName");
const descriptionInput = document.getElementById("description");
const brandInput = document.getElementById("brand");
const imgInput = document.getElementById("productImg");
const priceInput = document.getElementById("price");

const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventId");

/* DELETE */

const deleteProduct = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGVhODgxODQ0MjAwMTUzNzU4YWYiLCJpYXQiOjE3MTUzMzA3MjgsImV4cCI6MTcxNjU0MDMyOH0.j3kwJ2NAzhHqXGtp3lVV4Rg0N2jFaH7AEhSxBm4Ap_Y",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Deleted successfully");
        location.assign("index.html");
      } else {
        alert("Could not delete");
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

/* RECUPERA PRODOTTO DA MODIFICARE */

const getProductToModify = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
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
    .then((event) => {
      nameInput.value = event.name;
      descriptionInput.value = event.description;
      brandInput.value = event.brand;
      imgInput.value = event.imageUrl;
      priceInput.value = event.price;
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

if (eventId) {
  getProductToModify();
  document.getElementsByClassName("btn-primary")[0].innerText =
    "Modifica prodotto";
  document.getElementById(
    "div-bottoni"
  ).innerHTML += `<button type="button" class="btn btn-dark" id="delete-button">
  Delete Product
</button>`;

  /* EVENT DELETE*/

  const deleteButton = document.getElementById("delete-button");
  deleteButton.addEventListener("click", deleteProduct);
}

/* MODIFCA O AGGIUNGI */

class ComicBook {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

const handleSubmit = function (e) {
  e.preventDefault();

  const productToUpload = new ComicBook(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imgInput.value,
    priceInput.value
  );

  let URL = "https://striveschool-api.herokuapp.com/api/product/";
  let methodToUse = "POST";

  if (eventId) {
    URL = `https://striveschool-api.herokuapp.com/api/product/${eventId}`;
    methodToUse = "PUT";
  }

  fetch(URL, {
    method: methodToUse,
    body: JSON.stringify(productToUpload),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZGVhODgxODQ0MjAwMTUzNzU4YWYiLCJpYXQiOjE3MTUzMzA3MjgsImV4cCI6MTcxNjU0MDMyOH0.j3kwJ2NAzhHqXGtp3lVV4Rg0N2jFaH7AEhSxBm4Ap_Y",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(`${eventId ? "Edited" : "Created"} successfully`);
      } else {
        throw new Error("Errore " + response.status);
      }
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

const formProdotto = document.getElementById("form-prodotto");
formProdotto.addEventListener("submit", handleSubmit);

/* BOTTONE RESET + MODALE */

const buttonReset = document.getElementById("svuota");

const resetWithModal = function () {
  const inputToReset = formProdotto.getElementsByTagName("input");
  Array.from(inputToReset).forEach((input) => {
    input.value = "";
  });
};
