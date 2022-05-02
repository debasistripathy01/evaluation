// write js code here corresponding to index.html

var schedule = JSON.parse(localStorage.getItem("matchList")) || [];



function formSubmit() {
    event.preventDefault();

    var schedule = [];

    matchDataObj = {
        Number: form.matchnum.value,
        Team_A: form.teamA.value,
        Team_B: form.teamB.value,
        Date: form.date.value,
        Venue: form.venue.value,
    };

    schedule.push(matchDataObj);


    localStorage.setItem("matchList", JSON.stringify(schedule));
    console.log(schedule);
}

// You should add submit event on the form