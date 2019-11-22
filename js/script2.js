/* ==================
    JS Basic
    - K. 2019
    - 09.23 ~ 10.04
 ==================== */

// Q1.
console.log('Q1. *출력 (1>2>...>10) :: 이중 for문 사용.');
for(var i = 0;i < 10; i++) {
    var text = '';
    for(var j = 0;j <= i; j++) {
        text += '*';
    }
    console.log(text);
}

console.log('\nQ1. *출력 (1>2>...>10) 단일 for문 사용.');
var text1_1 = '';
for(var i = 0;i < 10; i++) {
    text1_1 += '*';
    console.log(text1_1);
}

console.log('\n====================================================================\n\n');

// Q2.
console.log('Q2. *출력 (5>4>3>2>1)');
for(var i = 0;i < 5; i++) {
    var text2 = '';
    for(var j = 5;j > i; j--) {
        text2 += '*';
    }
    console.log(text2);
}

console.log('\n====================================================================\n\n');

// Q3.
console.log('Q3. 행과 열에 특정문자 출력');
for(var i=0; i<5; i++) {
    var text3 = '';
    for(var j=0; j<5; j++) {
        if(j==i) {
            text3 += 'a ';
        } else {
            text3 += '. ';
        }
    }    
    console.log(text3);
}

console.log('\n====================================================================\n\n');

// Q4. 
console.log('Q4. 랜덤 숫자 출력');
console.log(random());

function random() {
    return parseInt((Math.random() * 13) + 59);
}

console.log('\n====================================================================\n\n');

// Q5
console.log('Q5. 행/열의 합 출력');
var quest = [
        [1,2,3,4,5],
        [3,5,7,9,11],
        [2,4,6,8,10],
        [3,4,5,6,7],
        [2,6,9,10,11]
    ],
    quest2 = [
        [1,2,3,4,5],
        [3,5,7,9,11],
        [2,4,6,8,10]
    ],
    quest3 = [
        [1,2,3],
        [3,5,7],
        [2,4,6],
        [5,10,15]
    ],
    reQuest;

// 행/열의 합
console.log(quest);
console.log('행의 합: ', Sum(quest));
console.log('열의 합: ', Sum(changeColNRow(quest, reQuest)));
console.log('열의 합2: ', colSum(quest));

console.log('\n', quest2);
console.log('열의 합: ', Sum(changeColNRow(quest2, reQuest)));
console.log('열의 합2: ', colSum(quest2));

console.log('\n', quest3);
console.log('열의 합: ', Sum(changeColNRow(quest3, reQuest)));
console.log('열의 합2: ', colSum(quest3));

// sum of rows
function Sum(quest) {
    var arrSum = [];
    for(var i = 0; i < quest.length; i++) {
        // init
        var sum = 0;

        for(var j = 0; j < quest[i].length; j++) {
            sum += quest[i][j];
        }
        arrSum.push(sum);
    }
    return arrSum;
}

// Change Col and Row
function changeColNRow(quest, reQuest) {
    var changeCol;
        reQuest = [];

    for(var i = 0; i < quest[0].length; i++) {
        changeCol = [];
        for(var j = 0; j < quest.length; j++) {
            changeCol.push(quest[j][i]);
        }
        reQuest.push(changeCol);
    }
    return reQuest;
}

// sum of columns
function colSum(quest) {
    reQuest = [];
    for(var i = 0; i < quest[0].length; i++) {
        var sum = 0;
        for (var j in quest) {
            sum += quest[j][i];
        }
        reQuest[i] = sum;
    }
    return reQuest;
}

console.log('\n====================================================================\n\n');

// Q6
console.log('Q6. 2의 0승 부터 2의 9승까지 출력');
console.log(squareRoot(2, 9));

// Square root
function squareRoot(num, squareroot) {
    var result = 0,
        arrSquareRoot = [];

    if(num == 0) {
        return result = 0;
    }
    
    for(var i = 0; i < squareroot; i++) {
        if(i == 0) {
            result = 1;
        } else {
            result *= num;
        }
        arrSquareRoot.push(result);
    }
    return arrSquareRoot;
}

console.log('\n====================================================================\n\n');

// Q7
console.log('Q7. 가운데 문자 출력(홀수일 경우 1문자, 짝수일 경우 2문자)');
console.log('odd: ', returnWord("abcdefg"), ', even: ', returnWord("abcdefgh"));

// return word
function returnWord(string) {
    var arrString = string.split(''),
        word = '';

    // even
    if(arrString.length % 2 == 0) {
        return word = arrString[arrString.length / 2 - 1] + arrString[arrString.length / 2];
    } else {  // odd
        return word = arrString[parseInt(arrString.length / 2)];
    }
}

console.log('\n====================================================================\n\n');

// Q8
console.log('Q8. 중복되지 않은 문자 출력');
console.log(removeDuplicateElement(["가", "나", "다", "0", "가"]));

// remove duplicate element
function removeDuplicateElement(array) {
    var newArray = [],
        flag;

    newArray.push(array[0]);

    for (var i in array) {
        flag = true;
        console.log('>>> ' + array + ' / ' + newArray);
        for (var j in newArray) {
            if(newArray[j] == array[i]) {
                flag = false;
            }
        }
        if(flag == true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
