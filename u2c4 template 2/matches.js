// write js code here corresponding to matches.html


var matchArr = JSON.parse(localStorage.getItem("schedule"));


document.querySelector("#filtervenue").addEventListener("click", filterFunc);

function filterFunc() {
    matchArr.sort(function(x, y) {
        if (x.Venue > y.Venue) {
            return 1;
        }
        if (x.Venue < y.Venue) {
            return -1;
        }
        return 0;
    });
};


displayData(matchArr);

function displayData(data) {
    event.preventDefault();

    document.querySelector("tbody").innerText = "";

    data.forEach(function(elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.Number;

        var td2 = document.createElement("td");
        td2.innerText = elem.TeamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.TeamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.Date;

        var td5 = document.createElement("td");
        td5.innerText = elem.Venue;

        var td6 = document.createElement("td");
        td6.innerText = "Add as Favourites";

        td6.style.color = "green";
        td6.addEventListener("click", function() {
            favouriteFunc(elem)
            alert("added as favourite");
        });

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append("tr");
    });

    function favouriteFunc(elem) {
        localStorage.setItem("favourites", JSON.stringify(matchArr));
    }

}