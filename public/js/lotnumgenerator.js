$(document).ready(function () {

    // max is inclusive (from 0 to max)
    function generateRandomIndex(max) {
        return Math.floor(Math.random() * max) + 1;
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

    function pickNumbers() {
        var pickedNumbers = new Object();
        var pickedCount = 0;
        while (pickedCount < 7) {
            pickNumber(pickedNumbers);
            pickedCount++;
        }
        return pickedNumbers;
    }


    // start of code
    $("button").on("click", function () {
        var lotNums = Object.keys(pickNumbers());

        $("#lotteryNumbers").text(lotNums);
    });
});