/* Contatore di viaggi presenti sulla pagina */
let myTravelCounter = document.getElementById("my-travel-counter");
let myTravelSolutions = document.getElementsByClassName("travel-solution");
myTravelCounter.innerText = myTravelSolutions.length;

/* per eliminare i viaggi presenti */
let myClearSearch = document.getElementById("clearsearch");
myClearSearch.addEventListener ('click', ()=> {
    for (let i = 0; i < myTravelSolutions.length; i++) {
        myTravelSolutions[i].style.display = "none";
    }
});



