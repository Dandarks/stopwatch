var h = 0; var m = 0; var s = 0;
var interval; var saveTime = "00:00:00";

function iniciar () {
    interval = setInterval (timer, 1000);
}

function timer () {
    s++;

    if (s == 60){
        s = 0;
        m++;
    };

    if (m == 60){
        m = 0;
        h++;
    }

    var format = 
    (h < 10 ? "0" + h : h) + ":" +
    (m < 10 ? "0" + m : m) + ":" +
    (s < 10 ? "0" + s : s);

    saveTime = document.getElementById("timer").innerHTML = format;
}

function pausar () {
    clearInterval(interval);
}

function salvar () {
    if (saveTime == "00:00:00"){
        alert("Inicie o Cronômetro antes de salvar")
    } else {
        document.getElementById("time-save").innerHTML += `<li>${saveTime}</li>`;
        document.getElementById("clean").style.display = "block";
    }
}

function limpar () {
    document.getElementById("time-save").innerHTML = "";
    document.getElementById("clean").style.display = "none";
}

function resetar () {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "00:00:00";
    saveTime = "00:00:00";
    s = 0; m = 0; h = 0;
}
