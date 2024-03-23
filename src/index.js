const form = document.querySelector("#form");
const message = document.querySelector(".message");

function biggerNumber(fieldA, fieldB) {
  message.style.color = "white";

  if (fieldA < fieldB) {
    message.style.backgroundColor = "green";
    document.querySelector("#fieldA").value = "";
    document.querySelector("#fieldB").value = "";
    return "Validação Valida, Numero B é maior do que o Numero A.";
  } else {
    if (fieldA > fieldB) {
      message.style.backgroundColor = "red";
      return "Validação invalida, Numero A é maior do que o Numero B.";
    } else {
      message.style.backgroundColor = "yellow";
      message.style.color = "black";
      return "Validação invalida, Numero B e Numero A tem o mesmo valor.";
    }
  }
}

function styleInputs(fieldA, fieldB) {
  if (fieldA > fieldB || fieldA === fieldB) {
    document.querySelector("#fieldA").style.border = "1.5px solid red";
    document.querySelector("#fieldB").style.border = "1.5px solid red";
  } else {
    document.querySelector("#fieldA").style.border = "";
    document.querySelector("#fieldB").style.border = "";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputFieldA = Number(document.querySelector("#fieldA").value);
  const inputFieldB = Number(document.querySelector("#fieldB").value);

  message.style.display = "block";
  styleInputs(inputFieldA, inputFieldB);
  message.innerHTML = biggerNumber(inputFieldA, inputFieldB);
});

