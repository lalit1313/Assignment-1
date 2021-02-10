var currentPoint;
var direction;
$("document").ready(function () {
    addGrid();
});
$("#commands").keypress(function () {
    setTimeout(evaluateCommand, 50)
});

function changeColoumn(){
    document.getElementById(currentPoint).style.backgroundColor="rgb(16 2 30 / 30%)";
}
function evaluateCommand() {
    var move = $('#commands').val();
    move = move.substring(move.length - 1, move.length);
    console.log(move);
    if (move === 'R') {
        document.getElementById(currentPoint).style.backgroundColor="transparent";
        $("#" + currentPoint).empty();
        direction = (direction + 1) % 4;
        $("#" + currentPoint).append("<img src='images/unnamed.png' id='triangle' class='rotate" + direction + "'>");
        changeColoumn();
        console.log("right");
    } else if (move === 'L') {
        document.getElementById(currentPoint).style.backgroundColor="transparent";
        $("#" + currentPoint).empty();
        direction = (direction + 3) % 4;
        $("#" + currentPoint).append("<img src='images/unnamed.png' id='triangle' class='rotate" + direction + "'>");
        changeColoumn();
        console.log("left");
    } else if (move === 'F') {
        var changedPoint = pointChange();
        if (checkRange(changedPoint)) {
            alert("The area is limited my friend. Sorry!!");
        } else {
            document.getElementById(currentPoint).style.backgroundColor="transparent";
            $("#" + currentPoint).empty();
            currentPoint += changedPoint;
            changeColoumn();
            $("#" + currentPoint).append("<img src='images/unnamed.png' id='triangle' class='rotate" + direction + "'>");
        }
    } else if (move === 'B') {
        var changedPoint = -pointChange();
        if (checkRange(changedPoint)) {
            alert("The area is limited my friend. Sorry!!");
        } else {
            document.getElementById(currentPoint).style.backgroundColor="transparent";
            $("#" + currentPoint).empty();
            currentPoint += changedPoint;
            changeColoumn();
            direction = (direction + 2) % 4;
            $("#" + currentPoint).append("<img src='images/unnamed.png' id='triangle' class='rotate" + direction + "'>");
        }
    } else {
        alert("Kindly pass valid Commands,Our Robot has just started learning !");
    }
}

function checkRange(extra) {
    var temp = currentPoint + extra;
    if (Math.floor((temp) / 10) > 8 || Math.floor((temp) / 10) < 1 || Math.floor((temp) % 10) > 8 || Math.floor((temp) % 10) < 1) {
        return true;
    }
    return false;
}

function pointChange() {
    if (direction == 0) {
        return -10;
    } else if (direction == 1) {
        return 1;
    } else if (direction == 2) {
        return 10;
    } else if (direction == 3) {
        return -1;
    }
    return -10;
}

function addGrid() {
    var i;
    for (i = 1; i < 9; i++) {
        console.log(i);
        $("#myTable").append(
            " <tr>" +
            "<td id='" + i + "1'></td>" +
            "<td id='" + i + "2'></td>" +
            "<td id='" + i + "3'></td>" +
            "<td id='" + i + "4'></td>" +
            "<td id='" + i + "5'></td>" +
            "<td id='" + i + "6'></td>" +
            "<td id='" + i + "7'></td>" +
            "<td id='" + i + "8'></td>" +
            "</tr>"
        );
    }
    currentPoint = 23;
    direction = 3;
    $("#23").append(
        "<img src='images/unnamed.png' id='triangle' class='rotate3'>"
    );
}