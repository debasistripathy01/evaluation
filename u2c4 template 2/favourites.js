// write js code here corresponding to favourites.html


var favouriteArr = JSON.parse(document.querySelector("schedule"));

displayData(favouriteArr);

function displayData(data) {
    event.preventDefault();

    data.forEach(function(elem) {
        document.querySelector("tbody").innerText = "";

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.Number;

        var td2 = document.createElement("td");
        td2.innerText = elem.Team_A;

        var td3 = document.createElement("td");
        td3.innerText = elem.Team_B;

        var td4 = document.createElement("td");
        td4.innerText = elem.Date;

        var td5 = document.createElement("td");
        td5.innerText = elem.Venue;

        var td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.style.color = "yellow";
        td6.setAttribute("click", DeleteFunc());
        td6.addEventListener("click", DeleteFunc);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append("tr");
    });

    function DeleteFunc() {
        data.parentNode.remove();
    }
    localStorage.setItem("favourites", JSON.stringify(favouriteArr));

}