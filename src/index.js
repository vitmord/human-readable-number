module.exports = function toReadable(number) {
    const arr = number.toString().split("");
    const [a, b, c] = arr;

    let res = "";

    if (arr.length == 1) {
        switch (a) {
            case "0":
                res += "zero";
                break;
            case "1":
                res += "one";
                break;
            case "2":
                res += "two";
                break;
            case "3":
                res += "three";
                break;
            case "4":
                res += "four";
                break;
            case "5":
                res += "five";
                break;
            case "6":
                res += "six";
                break;
            case "7":
                res += "seven";
                break;
            case "8":
                res += "eight";
                break;
            case "9":
                res += "nine";
                break;
        }
    }

    if (arr.length == 2) {
        switch (a) {
            case "2":
                res += "twenty";
                break;
            case "3":
                res += "thirty";
                break;
            case "4":
                res += "forty";
                break;
            case "5":
                res += "fifty";
                break;
            case "6":
                res += "sixty";
                break;
            case "7":
                res += "seventy";
                break;
            case "8":
                res += "eighty";
                break;
            case "9":
                res += "ninety";
                break;
        }

        switch (b) {
            case "1":
                res += " one";
                break;
            case "2":
                res += " two";
                break;
            case "3":
                res += " three";
                break;
            case "4":
                res += " four";
                break;
            case "5":
                res += " five";
                break;
            case "6":
                res += " six";
                break;
            case "7":
                res += " seven";
                break;
            case "8":
                res += " eight";
                break;
            case "9":
                res += " nine";
                break;
        }

        switch (a + b) {
            case "10":
                res = "ten";
                break;
            case "11":
                res = "eleven";
                break;
            case "12":
                res = "twelve";
                break;
            case "13":
                res = "thirteen";
                break;
            case "14":
                res = "fourteen";
                break;
            case "15":
                res = "fifteen";
                break;
            case "16":
                res = "sixteen";
                break;
            case "17":
                res = "seventeen";
                break;
            case "18":
                res = "eighteen";
                break;
            case "19":
                res = "nineteen";
                break;
        }
    }

    if (arr.length == 3) {
        switch (a) {
            case "1":
                res += "one hundred";
                break;
            case "2":
                res += "two hundred";
                break;
            case "3":
                res += "three hundred";
                break;
            case "4":
                res += "four hundred";
                break;
            case "5":
                res += "five hundred";
                break;
            case "6":
                res += "six hundred";
                break;
            case "7":
                res += "seven hundred";
                break;
            case "8":
                res += "eight hundred";
                break;
            case "9":
                res += "nine hundred";
                break;
        }
        switch (b) {
            case "0":
                res += "";
                break;
            case "1":
                res += "";
                break;
            case "2":
                res += " twenty";
                break;
            case "3":
                res += " thirty";
                break;
            case "4":
                res += " forty";
                break;
            case "5":
                res += " fifty";
                break;
            case "6":
                res += " sixty";
                break;
            case "7":
                res += " seventy";
                break;
            case "8":
                res += " eighty";
                break;
            case "9":
                res += " ninety";
                break;
        }

        switch (c) {
            case "1":
                res += " one";
                break;
            case "2":
                res += " two";
                break;
            case "3":
                res += " three";
                break;
            case "4":
                res += " four";
                break;
            case "5":
                res += " five";
                break;
            case "6":
                res += " six";
                break;
            case "7":
                res += " seven";
                break;
            case "8":
                res += " eight";
                break;
            case "9":
                res += " nine";
                break;
        }

        switch (b + c) {
            case "10":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " ten";
                break;
            case "11":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " eleven";
                break;
            case "12":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " twelve";
                break;
            case "13":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " thirteen";
                break;
            case "14":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " fourteen";
                break;
            case "15":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " fifteen";
                break;
            case "16":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " sixteen";
                break;
            case "17":
                res =
                    res.split(" ")[0] + " " + res.split(" ")[1] + " seventeen";
                break;
            case "18":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " eighteen";
                break;
            case "19":
                res = res.split(" ")[0] + " " + res.split(" ")[1] + " nineteen";
                break;
        }
    }

    return res;
};
