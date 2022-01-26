/* let work, play, study, exercise, social, selfCare = [];

 console.log(data);
work = data[0];
play = data[1];
study = data[2];
exercise = data[3];
social = data[4];
selfCare = data[5];  */


/* basic fetch from a url/file. also updates the titles */
fetch("./data.json")
.then(function(res){
    return res.json();
})
.then(function(data){
    document.getElementById("workText").textContent = data[0].title
    document.getElementById("playText").textContent = data[1].title
    document.getElementById("studyText").textContent = data[2].title
    document.getElementById("exerciseText").textContent = data[3].title
    document.getElementById("socialText").textContent = data[4].title
    document.getElementById("selfCareText").textContent = data[5].title
});

/* daily. gets the daily data and updates the text*/
function dailyButton()
{
fetch("./data.json")
.then(function(res){
    return res.json();
})
.then(function(data){
    document.getElementById("workHours").textContent = data[0].timeframes.daily.current + " Hours"
    document.getElementById("workLWHours").textContent = "Yesterday - " + data[0].timeframes.daily.previous + " Hours"
                    /*---- ------------------------------------------------------------- */
    document.getElementById("playHours").textContent = data[1].timeframes.daily.current + " Hours"
    document.getElementById("playLWHours").textContent = "Yesterday - " + data[1].timeframes.daily.previous + " Hours"
                    /*---- --------------------------------------------------------- */
    document.getElementById("studyHours").textContent = data[2].timeframes.daily.current+ " Hours"
    document.getElementById("studyLWHours").textContent = "Yesterday - " + data[2].timeframes.daily.previous + " Hours"
                /*-----------------------------------------------------  */
    document.getElementById("exerciseHours").textContent = data[3].timeframes.daily.current + " Hours"
    document.getElementById("exerciseLWHours").textContent = "Yesterday - " + data[3].timeframes.daily.previous + " Hours"
/*---- ------------------------------------------------------------- */
    document.getElementById("socialHours").textContent = data[4].timeframes.daily.current + " Hours"
    document.getElementById("socialLWHours").textContent = "Yesterday - " + data[4].timeframes.daily.previous + " Hours"
                    /*---- ------------------------------------------------------------- */
    document.getElementById("selfCareHours").textContent = data[5].timeframes.daily.current + " Hours"
    document.getElementById("selfCareLWHours").textContent = "Yesterday - " + data[5].timeframes.daily.previous + " Hours"
});
document.getElementById("dailyButton").style.backgroundColor = "rgba(0, 0, 0, 0.349)"
document.getElementById("weeklyButton").style.backgroundColor = "transparent"
document.getElementById("monthlyButton").style.backgroundColor = "transparent"
}
dailyButton()


/* weekly gets the weekly data, and updates the text */

function weeklyButton()
{
fetch("./data.json")
.then(function(res){
    return res.json();
})
.then(function(data){
    document.getElementById("workHours").textContent = data[0].timeframes.weekly.current + " Hours"
    document.getElementById("workLWHours").textContent = "Last Week - " + data[0].timeframes.weekly.previous + " Hours"
                    /*---- ------------------------------------------------------------- */
    document.getElementById("playHours").textContent = data[1].timeframes.weekly.current + " Hours"
    document.getElementById("playLWHours").textContent = "Last Week - " + data[1].timeframes.weekly.previous + " Hours"
                    /*---- --------------------------------------------------------- */
    document.getElementById("studyHours").textContent = data[2].timeframes.weekly.current + " Hours"
    document.getElementById("studyLWHours").textContent = "Last Week - " + data[2].timeframes.weekly.previous + " Hours"
                /*-----------------------------------------------------  */
    document.getElementById("exerciseHours").textContent = data[3].timeframes.weekly.current + " Hours"
    document.getElementById("exerciseLWHours").textContent = "Last Week - " + data[3].timeframes.weekly.previous + " Hours"
/*---- ------------------------------------------------------------- */
    document.getElementById("socialHours").textContent = data[4].timeframes.weekly.current + " Hours"
    document.getElementById("socialLWHours").textContent = "Last Week - " + data[4].timeframes.weekly.previous + " Hours"
                    /*---- ------------------------------------------------------------- */
    document.getElementById("selfCareHours").textContent = data[5].timeframes.weekly.current + " Hours"
    document.getElementById("selfCareLWHours").textContent = "Last Week - " + data[5].timeframes.weekly.previous + " Hours"
});
document.getElementById("dailyButton").style.backgroundColor = "transparent"
document.getElementById("weeklyButton").style.backgroundColor = "rgba(0, 0, 0, 0.349)"
document.getElementById("monthlyButton").style.backgroundColor = "transparent"
}



/* monthly. gets the monthly data and changes the text */

function monthlyButton()
{
fetch("./data.json")
.then(function(res){
    return res.json();
})
.then(function(data){
    document.getElementById("workHours").textContent = data[0].timeframes.monthly.current + " Hours"
    document.getElementById("workLWHours").textContent = "Last Month - " + data[0].timeframes.monthly.previous + " Hours"
                    /*---- ------------------------------------------------------------- */
    document.getElementById("playHours").textContent = data[1].timeframes.monthly.current + " Hours"
    document.getElementById("playLWHours").textContent = "Last Month - " + data[1].timeframes.monthly.previous + " Hours"
                    /*---- --------------------------------------------------------- */
    document.getElementById("studyHours").textContent = data[2].timeframes.monthly.current + " Hours"
    document.getElementById("studyLWHours").textContent = "Last Month - " + data[2].timeframes.monthly.previous + " Hours"
                /*-----------------------------------------------------  */
    document.getElementById("exerciseHours").textContent = data[3].timeframes.monthly.current + " Hours"
    document.getElementById("exerciseLWHours").textContent = "Last Month - " + data[3].timeframes.monthly.previous + " Hours"
/*---- ------------------------------------------------------------- */
    document.getElementById("socialHours").textContent = data[4].timeframes.monthly.current + " Hours"
    document.getElementById("socialLWHours").textContent = "Last Month - " + data[4].timeframes.monthly.previous + " Hours"
                    /*---- ------------------------------------------------------------- */
    document.getElementById("selfCareHours").textContent = data[5].timeframes.monthly.current + " Hours"
    document.getElementById("selfCareLWHours").textContent = "Last Month - " + data[5].timeframes.monthly.previous + " Hours"
});
document.getElementById("dailyButton").style.backgroundColor = "transparent"
document.getElementById("weeklyButton").style.backgroundColor = "transparent"
document.getElementById("monthlyButton").style.backgroundColor = "rgba(0, 0, 0, 0.349)"
}