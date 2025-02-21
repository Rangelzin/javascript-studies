/*
    - Selecionando Elementos:

        - getElementById() // Traz apenas um elemento (element)
        - getElementByClassName() // Traz diversos elementos (HTML Collection)
        - getElementByTagName() // Traz diversos elementos (HTML Collection)
        - getElementByName() // Traz os elementos com o nome selecionado (NodeList)


        - querySelector() // Traz apenas um elemento, o primeiro que encontrar (element)
        - querySelectorAll() // Traz TODOS os elementos que encontrar (NodeList)

    - NodeList x HTML Collection

*/

const element = document.getElementById("main-text");

const element2 = document.getElementsByClassName("paragraph");

const element3 = document.getElementsByTagName("p");

const element4 = document.querySelector("p");

const element5 = document.querySelectorAll("p");

element5.forEach((element) => {
  console.log(element);
});

const element6 = document.getElementByName("my-input");
