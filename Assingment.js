// Problem- 01
// I'm writing this function by using  mathematical operations to get a final output. 
function mindGame(positiveNum) {
    const mindGameMul = positiveNum * 3;
    const mindGameAdd = mindGameMul + 10;
    const mindGameDiv = mindGameAdd / 2;
    const mindGameSub = mindGameDiv - 5;
    return mindGameSub;
}
const endGameNum = 33;
const endGame = mindGame(endGameNum);
console.log(endGame);




// Problem- 02
// The main focus of writing the function is to define the character numbers of a particular string is either even or odd.
function evenOdd(str) {
    if (str.length % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
const text = "Batch7";
const callFunction = evenOdd(text);
console.log(callFunction);





// Problem -03
// The main purpose of writing the function is to show less than or greater than of a input number using mathematical operations.
function isLGSeven(number) {
    const calculateOfNum = number - 7;
    if (calculateOfNum < 7) {
        return calculateOfNum;
    } else {
        return inputNum * 2;
    }
}
const inputNum = 6;
const functionOutput = isLGSeven(inputNum);
console.log(functionOutput);




// Problem -04
// I wrote this function for finding bad data from an array.
function findingBadData(arr) {
    const badData = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
       if(element < -1){
        badData.push(element);
       }
    }
    return badData.length;
}
const badAndGoodData = [-12, 9, -17, -6, -10, 23, -54, 67];
const badDataOutput = findingBadData(badAndGoodData);
console.log(badDataOutput);




// Problem -05
// purpose of the function is that to show if there are three friends have some gems and to convert their gems into diamond what will be the case.
function gemsToDiamond(friend1,friend2,friend3){
    const gem1 = 21 * friend1;
    const gem2 = 32 * friend2;
    const gem3 = 43 * friend3;
    const diamonds = gem1 + gem2 + gem3;
    if(diamonds > 1000*2){
        const diamondsSub = diamonds - 2000;
        return diamondsSub;
    }
    return diamonds;
}
const totalDiamond = gemsToDiamond(100,5,1);
console.log(totalDiamond); 


