let is24Hour = true;

function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');

    let ampm = '';

    if(!is24Hour){
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2,'0');

    document.getElementById('clock').innerText =
        `${hours}:${minutes}:${seconds}${ampm}`;

    let days = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"
    ];

    let months = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];

    document.getElementById('date').innerText =
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    let greeting = "";

    if(now.getHours() < 12){
        greeting = "Good Morning ☀️";
    }
    else if(now.getHours() < 17){
        greeting = "Good Afternoon 🌤️";
    }
    else if(now.getHours() < 21){
        greeting = "Good Evening 🌙";
    }
    else{
        greeting = "Good Night 🌛";
    }

    document.getElementById("greeting").innerText = greeting;
}

function toggleFormat(){
    is24Hour = !is24Hour;
    updateClock();
}

function toggleTheme(){
    document.body.classList.toggle("light");
}

setInterval(updateClock,1000);
updateClock();