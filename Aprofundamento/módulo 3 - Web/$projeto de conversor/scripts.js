const button = document.getElementById("convert-button");

const select = document.getElementById("select-currency");

const dollar = 5.73;
const euro = 6.0;
const bitcoin = 551779

const convertValues = () => {
  const inputReal = document.getElementById("input-values").value;

  const RealValueText = document.getElementById("RealValue");

  const ConvertValueText = document.getElementById("ConvertValue");

  const convertDOL = inputReal / dollar;
  const convertEUR = inputReal / euro;
  const convertBIT = (inputReal / bitcoin).toFixed(4)

  RealValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value == "US$ Dólar americano") {
    ConvertValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(convertDOL);
  }

  if (select.value == "€ Euro") {
    ConvertValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(convertEUR);
  }
  if (select.value == "₿ Bitcoin") {
    ConvertValueText.innerHTML = `₿ ${convertBIT}`
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");
  const ConvertValueText = document.getElementById("ConvertValue");

  if (select.value == "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "assets/eua.png";
    ConvertValueText.innerHTML = "US$ 0,00";
  }

  if (select.value == "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "assets/euro.png";
    ConvertValueText.innerHTML = "€ 0,00";
  }
  if (select.value == "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "assets/bitcoin.png";
    ConvertValueText.innerHTML = "0.0";
  }


  convertValues()
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
