var startplay;
function gameStart() {
    document.getElementById("box1").disabled = false;
    document.getElementById("box2").disabled = false;
    document.getElementById("box3").disabled = false;
    document.getElementById("box4").disabled = false;
    document.getElementById("box5").disabled = false;
    document.getElementById("box6").disabled = false;
    document.getElementById("box7").disabled = false;
    document.getElementById("box8").disabled = false;
    document.getElementById("box9").disabled = false;
}
function clicks() {
    
    var box1, box1, box3, box4, box5, box6, box7, box8, box9;
    box1 = document.getElementById("box1").value;
    box2 = document.getElementById("box2").value;
    box3 = document.getElementById("box3").value;
    box4 = document.getElementById("box4").value;
    box5 = document.getElementById("box5").value;
    box6 = document.getElementById("box6").value;
    box7 = document.getElementById("box7").value;
    box8 = document.getElementById("box8").value;
    box9 = document.getElementById("box9").value;
    var counter1 = 0;
    var counter2 = 0;
    var score1 = document.getElementById("score1");
    var score2 = document.getElementById("score2");

    if ((box1 == 'X') && (box2 == 'X') && (box3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }

    else if ((box1 == 'X') && (box4 == 'X') && (box7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;

        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;

    }
    else if ((box7 == 'X') && (box8 == 'X') && (box9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box3 == 'X') && (box6 == 'X') && (box9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box1 == 'X') && (box5 == 'X') && (box9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box3 == 'X') && (box5 == 'X') && (box7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box2 == 'X') && (box5 == 'X') && (box8 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box4 == 'X') && (box5 == 'X') && (box6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        counter1++;
        score1.innerHTML = counter1;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player X won');
        startplay = document.getElementById("start-play").disabled = true;
    }


    else if ((box1 == 'O') && (box2 == 'O') && (box3 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box1 == 'O') && (box4 == 'O') && (box7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box7 == 'O') && (box8 == 'O') && (box9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box3 == 'O') && (box6 == 'O') && (box9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box1 == 'O') && (box5 == 'O') && (box9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box3 == 'O') && (box5 == 'O') && (box7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box2 == 'O') && (box5 == 'O') && (box8 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }
    else if ((box4 == 'O') && (box5 == 'O') && (box6 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        counter2++;
        score2.innerHTML = counter2;
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        window.alert('Player O won');
        startplay = document.getElementById("start-play").disabled = true;
    }


    else if ((box1 == 'X' || box1 == 'O') && (box2 == 'X' 
        || box2 == 'O') && (box3 == 'X' || box3 == 'O') && 
        (box4 == 'X' || box4 == 'O') && (box5 == 'X' || 
        box5 == 'O') && (box6 == 'X' || box6 == 'O') && 
        (box7 == 'X' || box7 == 'O') && (box8 == 'X' || 
        box8 == 'O') && (box9 == 'X' || box9 == 'O')) {
            document.getElementById('print').innerHTML = "Match Tie";
            window.alert('Match Tie');
            startplay = document.getElementById("start-play").disabled = true;
      }
    else {

        
        if (turncheck == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}


function reset() {

    document.getElementById('box1').value = '';
    document.getElementById("box2").value = '';
    document.getElementById("box3").value = '';
    document.getElementById("box4").value = '';
    document.getElementById("box5").value = '';
    document.getElementById("box6").value = '';
    document.getElementById("box7").value = '';
    document.getElementById("box8").value = '';
    document.getElementById("box9").value = '';
    document.getElementById("box1").disabled = false;
    document.getElementById("box2").disabled = false;
    document.getElementById("box3").disabled = false;
    document.getElementById("box4").disabled = false;
    document.getElementById("box5").disabled = false;
    document.getElementById("box6").disabled = false;
    document.getElementById("box7").disabled = false;
    document.getElementById("box8").disabled = false;
    document.getElementById("box9").disabled = false;
    startplay = document.getElementById("start-play").disabled = false;
}

turncheck = 1;
function box1T() {
    if (turncheck == 1) {
        document.getElementById("box1").value = "X";
        document.getElementById("box1").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box1").value = "O";
        document.getElementById("box1").disabled = true;
        turncheck = 1;
    }
}

function box2T() {
    if (turncheck == 1) {
        document.getElementById("box2").value = "X";
        document.getElementById("box2").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box2").value = "O";
        document.getElementById("box2").disabled = true;
        turncheck = 1;
    }
}

function box3T() {
    if (turncheck == 1) {
        document.getElementById("box3").value = "X";
        document.getElementById("box3").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box3").value = "O";
        document.getElementById("box3").disabled = true;
        turncheck = 1;
    }
}

function box4T() {
    if (turncheck == 1) {
        document.getElementById("box4").value = "X";
        document.getElementById("box4").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box4").value = "O";
        document.getElementById("box4").disabled = true;
        turncheck = 1;
    }
}

function box5T() {
    if (turncheck == 1) {
        document.getElementById("box5").value = "X";
        document.getElementById("box5").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box5").value = "O";
        document.getElementById("box5").disabled = true;
        turncheck = 1;
    }
}

function box6T() {
    if (turncheck == 1) {
        document.getElementById("box6").value = "X";
        document.getElementById("box6").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box6").value = "O";
        document.getElementById("box6").disabled = true;
        turncheck = 1;
    }
}

function box7T() {
    if (turncheck == 1) {
        document.getElementById("box7").value = "X";
        document.getElementById("box7").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box7").value = "O";
        document.getElementById("box7").disabled = true;
        turncheck = 1;
    }
}

function box8T() {
    if (turncheck == 1) {
        document.getElementById("box8").value = "X";
        document.getElementById("box8").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box8").value = "O";
        document.getElementById("box8").disabled = true;
        turncheck = 1;
    }
}

function box9T() {
    if (turncheck == 1) {
        document.getElementById("box9").value = "X";
        document.getElementById("box9").disabled = true;
        turncheck = 0;
    }
    else {
        document.getElementById("box9").value = "O";
        document.getElementById("box9").disabled = true;
        turncheck = 1;
    }
}
