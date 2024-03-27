const form = document.querySelector("#form");
const message = document.querySelector(".message");

const inputA =  document.querySelector("#fieldA")
const inputB = document.querySelector("#fieldB");

function biggerNumber(fieldA, fieldB) {
  message.style.color = "white";

  if (fieldA < fieldB) {
    message.style.backgroundColor = "green";
    inputA.value = "";
    inputB.value = "";
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
    inputA.style.border = "1.5px solid red";
    inputB.style.border = "1.5px solid red";
  } else {
    inputA.style.border = "";
    inputB.style.border = "";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputFieldA = Number(inputA.value);
  const inputFieldB = Number(inputB.value);

  message.style.display = "block";
  styleInputs(inputFieldA, inputFieldB);
  message.innerHTML = biggerNumber(inputFieldA, inputFieldB);
});

