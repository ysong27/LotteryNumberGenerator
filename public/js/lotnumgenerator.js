$(document).ready(function () {
    $("#drawButton").on("click", function () {
        var lotNums = Object.keys(pickNumbers());
        var lotNumsHtml = "";
        for (var num of lotNums) {
            lotNumsHtml += `<div class="lotteryNumber">${num}</div>`;
        }
        $("#lotteryNumbersDiv").html(lotNumsHtml);
    });
});


function pickNumbers() {
    var pickedNumbers = new Object();
    var pickedCount = 0;
    while (pickedCount < 7) {
        pickNumber(pickedNumbers);
        pickedCount++;
    }
    return pickedNumbers;
}

function pickNumber(pickedNumbers) {
    while (true) {
        var index = generateRandomIndex(49);
        if (!pickedNumbers[index]) {
            pickedNumbers[index] = true;
            break;
        }
    }
}

function generateRandomIndex(max) {
    return Math.floor(Math.random() * max) + 1;
}
