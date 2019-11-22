// Q1.
for(var i = 0;i < 10; i++) {
    var node = document.createElement('p'),
        nodeText = '',
        text = '';
    for(var j = 0;j < i; j++) {
        text += '*';
    }
    createElement('one', node, text, nodeText);
}

// Q2.
for(var i = 0;i < 5; i++) {
    var node2 = document.createElement('p'),
        nodeText2 = '',
        text2 = '';
    for(var j = 5;j > i; j--) {
        text2 += '*';
    }
    createElement('two', node2, text2, nodeText2);
}

// Q3.
for(var i=0; i<5; i++) {
    var node3 = document.createElement('p'),
        nodeText3 = '',
        text3 = '';
    for(var j=0; j<5; j++) {
        if(j==i) {
            text3 += 'a ';
        } else {
            text3 += '. ';
        }
    }    
    createElement('three', node3, text3, nodeText3);
}

// Q4. 
var node4 = document.createElement('p'),
    randomNum = document.createTextNode(random());

node4.appendChild(randomNum);
document.getElementById('four').appendChild(node4);

function random() {
    return parseInt((Math.random() * 13) + 59);
}

// Q5
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
    ];
var node5 = document.createElement('p'),
    nodeText5,
    reQuest;

// 행의 합
Sum(quest, '행', 'five', node5, nodeText5);

// 열의 합
Sum(changeColNRow(quest, reQuest), '열', 'five2', node5, nodeText5);
Sum(changeColNRow(quest2, reQuest), '열', 'five3', node5, nodeText5);
Sum(changeColNRow(quest3, reQuest), '열', 'five4', node5, nodeText5);

// Q6
var node6 = document.createElement('p'),
    nodeText6 = '',
    text6 = squareRoot(2, 9);
createElement('six', node6, text6, nodeText6);

// Q7
var node7 = document.createElement('p'),
    nodeText7 = '',
    text7 = returnWord("abcdefg");
createElement('seven', node7, text7, nodeText7);

var node7_2 = document.createElement('p'),
    nodeText7_2 = '',
    text7_2 = returnWord("abcdefgh");
createElement('seven2', node7_2, text7_2, nodeText7_2);

// Q8
var node8 = document.createElement('p'),
    nodeText8 = '',
    text8 = removeDuplicateElement(["가", "나", "다", "0", "가"]);
createElement('eight', node8, text8, nodeText8);

/* ==================
    Function 
    - K. 2019
    - 09.23 ~ 10.04
 ==================== */
// remove duplicate element
function removeDuplicateElement(array) {
    var newArray = [],
        flag;

    newArray.push(array[0]);

    for (var i in array) {
        flag = true;
        
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

// return word
function returnWord(string) {
    var arrString = string.split(''),
        word = '';

    // even
    if(arrString.length % 2 == 0) {
        return word = arrString[arrString.length / 2 - 1] + arrString[arrString.length / 2];
    } else {    // odd
        return word = arrString[parseInt(arrString.length/2)];
    }
}

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

// Sum Procession
function Sum(quest, text, id, node, appendNodeText) {
    for(var i = 0; i < quest.length; i++) {
        // init
        var node = document.createElement('p'),
            sum = 0;
            appendNodeText = '';

        for(var j = 0; j < quest[i].length; j++) {
            sum += quest[i][j];
        }

        createElement(id, node, i+1 + text + '의 합: ' + sum, appendNodeText);
    }
}

// Create Element
function createElement(id, node, nodeText, appendNodeText) {
    appendNodeText = document.createTextNode(nodeText);
    node.appendChild(appendNodeText);
    document.getElementById(id).appendChild(node);
}