[ date: 19.08 ~ 10 ]

# [ Quiz ]

[view Quiz](https://kwoneunju.github.io/Js-study-1908-1910/index.html)

Q1 ~ 3. 반복문으로 아래와 같은 모양 출력되게 하기<br/>

1. ㅁ<br/>
   ㅁㅁ<br/>
   ㅁㅁㅁ<br/>
   ㅁㅁㅁㅁ<br/>
   ㅁㅁㅁㅁㅁ<br/>
   ㅁㅁㅁㅁㅁㅁ<br/>
   ㅁㅁㅁㅁㅁㅁㅁ<br/>
   ㅁㅁㅁㅁㅁㅁㅁㅁ<br/>
   ㅁㅁㅁㅁㅁㅁㅁㅁㅁ<br/>
   ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ

2. *****<br/>
   ****<br/>
   ***<br/>
   **<br/>
   *

3. ㅁ....<br/>
   .ㅁ...<br/>
   ..ㅁ..<br/>
   ...ㅁ.<br/>
   ....ㅁ

Q4. Math객체로 59~71 사이의 정수 랜덤 발생시키기

Q5. 아래 배열의 행과 열의 합 구하기. (행과 열 각각의 합)<br/>
*  var a = [<br/>
     [1, 2, 3, 4, 5], <br/>
     [3, 5, 7, 9,11], <br/>
     [2, 4, 6, 8, 10], <br/>
     [3, 4, 5, 6, 7], <br/>
     [2, 6, 9, 10,11]<br/>
 ];

Q6. 2의 거듭제곱, 2의 0승부터 2의 9승까지의 값을 변수에 배열로 저장하고 출력하기.

Q7. 특정 단어의 가운데 글자를 반환하는 함수 만들기. (단어의 길이가 짝수일 경우 가운데 두글자 반환)
* ex) "abcedfg" >> "d" 반환, "abcdefgh" >> "de" 반환

Q8. 배열에서 중복되는 원소 제거 함수 만들기.
* ex) ["가", "나", "다", "0", "가"] >> "가", "나", "다", "0" 반환

<br/>

***

<br/>

# [JS Study] Basic

## Object

## Data Types
* Undefiend
* Boolean
* Number
* String
* Null

## Conditions

## Loop
* for
  * 특정한 조건이 거짓으로 판별될 때까지 반복
  * for([초기문]; [조건문]; [증감문]) { 실행문장 }
  ```
  var num = [1, 2, 3, 4, 5];
  for(var i = 0; i < cars.length; ++) {
      num[i];
  }
  ```
* while
  * 조건문이 참이면 실행, 거짓이면 반복문 종료
  * 무한 루프는 피하자.
  * while(조건문) { 실행문장 }
    ```
    var n = 0,
    result = 0;
    while(n < 3) {
      result += n;
      n++;
    }

    // 무한 루프
    while(true) {
        console.log("hello, world!");
    }
    ```
* do-while
  * 조건문이 참이면 실행, 조건문 확인 전에 실행문장 한번 실행
  * do { 실행문장 }
    while(조건문);
    ```
    do {
        var i += 1;
        console.log(i);
    } while (i < 5);
    ```
* for in
  * 객체의 열거 속성을 통해 지정된 변수 반복
  * 배열 요소 반복할 때 사용 가능
    * **!** for in문은 숫자 인덱스에 추가하여 사용자 정의 속성의 이름을 반환하므로 사용자 정의 속성 or 메서드를 추가 하는 등 array 객체를 수정한다면 배열 요소 이외에도 사용자 정의 속성을 통해 반복하기 때문에, 배열을 통해 반복할 때 숫자 인덱스와 전통적인 for 루프를 사용하는 것이 좋음
  * for(variable in object) { statements }
    ```
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
    ```
* for of
  * 각각의 고유한 특성의 값을 실행할 명령과 함께 사용자 지정 반복 후크를 호출하여, 반복 가능한 객체(배열, Map, Set, 인수 객체 등을 포함)를 통해 반복하는 루프 생성
  * for(variable of object) { statement }
    ```
    let arr = [3, 5, 7];
    ```

<br>

* break
  * 반복문, switch문, 레이블 문과 결합한 문장을 빠져나올 때 사용
    ```
    break;
    break label;
    ```
* continue
  * while, do-while, for, label문 다시 시작하기 위해 사용
  * 가장 안쪽의 whiler, do-whiler, for문을 둘러싼 현재 반복을 종료 후, 다음 반복 루프 실행
  * while문에서는 조건으로 이동, for문에서는 증가표현으로 이동
  * 레이블에서는 그 레이블로 식별되는 루프 문에 적용
    ```
    continue;
    continue label;
    ```

## 배열 (Array)
* 이름과 인덱스로 참조되는 정렬된 값들의 집합
* 인덱스는 0부터 시작
* 배열의 길이 속성은 배열에 저장되어 있는 가장 큰 인덱스보다 1만큼 큰 값
* 다차원 배열: 배열안에 또 다른 배열을 요소로 포함
* 대괄호 문법
  *  == '배열 문자' == '배열 초기화'
  *  다른 배열 생성 표기법 보다 짧고 일반적으로 선호하는 문법
* 제공되는 property
  * length
* 제공되는 method
  * concat(): 두개의 배열의 합 반환
  * join(delemiter): 배열의 모든 요소를 주어진 구분자로 연결된 하나의 문자열로 반환
  * push(): 배열의 마지막에 요소 추가 후, **추가된 요소를 포함한 길이 반환**
  * pop(): 배열의 마지막 요소 제거 후, **제거된 요소 반환**
  * shift(): 배열의 첫번째 요소 제거 후, **제거된 요소 반환**
  * unshift(): 배열의 앞에 추가 후, **추가한 요소를 포함한 길이 반환**
  * slice(start_Index, upto_index): 특정 부분 추출 후, 추출된 부분을 포함한 새 배열 반환(upto_index 요소 불포함)
  * splice(index, count_to_remove, addElement, ...): 주어진 인덱스 요소를 포함한 count_to_remove 수 만큼 삭제 후, 주어진 요소로 변환
  * reverse(): 배열의 역순으로 정렬
  * sort(): 정순으로 정렬
  * indexOf(searchElement [, fromIndex]): searchElement 검색 후, 첫번째 일치 항목의 인덱스 반환
  * lastIndexOf(searchElement [, fromIndex]): 배열의 뒤에서부터 searchElement 검색 후 첫번째 인덱스 반환
  * forEach(callback [, thisObject]): 배열의 모든 요소에 대해 반복적으로 주어진 callback 함수 실행
  * map(callback [, thisObject]): 배열의 모든 요소에 대해 콜백함수 실행 후, 콜백 함수의 실행결과를 새로운 배열에 담아 반환
  * filter(callback [, thisObject]): 배열의 모든 요소에 대해 콜백 함수가 true를 반환하는 요소를 새로운 배열에 담아 반환
  * every(callback [, thisObject]): 콜백이 배열의 모든 항목에 대해 true를 반환하면 true를 반환
  * some(callback [, thisObject]): 배열의 모든 요소에 대해 콜백 함수를 실행하고 하나의 요소라도 콜백 함수의 결과가 true이면 true 반환
  * reduce(callback [, initialValue]): 배열내의 요소를 하나의 요소로 줄이기 위해 firstValue, secondValue를 인자로 받는 콜백 함수 실행 후, 합을 반환
  * reduceRight(callback [, initialValue]): reduce()와 유사 동작 but, 배열의 마지막 요소부터 시작

### 배열 생성
```
// 요소 없는 배열 생성
var arr = new Array(arryLength);
var arr2 = Array(arryLength);
var arr3 = [];
    arr3.length = arrayLength;

// * arryLength는 양의 정수여야 함.
// * 소수점일 경우 범위 (RangeError: Invalid array length) 발생

// 요소 있는 배열 생성
var arr = new Array(element, ..., elementN);
var arr2 = Array(element, ..., elementN);
var arr3 = [element, ..., elementN];
```

### 배열 값 저장
```
var arr = [];
arr[0] = 'test';
arr[1] = 'test2';

// * 배열 연산자에 양의 정수가 아닌 값을 줄 경우: 배열의 요소 대신 배열로 대변되는 객체의 속성이 생성 됨
arr[3.4] = 'test3';
console.log(arr.length);  // 0
console.log(arr.hasOwnProperty(3.4));  // true
```

### 배열 요소 참조
```
var arr = ['test', 'test2'];
arr[1];  // test2
arr['length'];  // 2
```

#### + 참고
* Javascript는 명시적인 배열 데이터 형식을 가지고 있지 않음
* but, 미리 정의된 배열 객체 사용 가능
* 배열 객체의 메서드를 개발하는 어플리케이션에서 사용되는 배열에 사용 가능

## 함수 (Function)
* javascript에서 기본적인 구성 블록 중 하나,
* 작업을 수행하거나 값을 계산하는 문장 집합 같은 자바스크립트 절차
* 함수를 호출하고자 하는 범위 내에서 함수를 정의
* 함수 선언
  * 함수의 이름을 지어주고, 함수가 호출될 때 무엇을 할지 지정 해주는 것.
* 함수 선언 키워드 
  * 함수의 이름
  * 괄호 안에서 쉼표로 분리된 함수의 매개변수 목록
  * 중괄호 {} 안에서 정의하는 자바스크립트 표현
* 함수 호출
  * 나타나있는 매개변수를 가지고 지정된 행위를 수행하는 것.
* 함수 범위
  * 함수가 선언된 곳
  * 전체 프로그램에서의 최상위 레벨(전역)에 선언된 곳

### 함수 선언(기본 구문적인 문(statement))
```
// 함수 선언
function test() {
    return false;
}
function test2(parameter) {
    return false;
}

// 함수 호출
test();
test2(parameter);  // parameter: 전달 값
```

### 함수 표현식(function expression)
* == 익명함수(모든 함수가 이름을 가질 필요는 없다는 의미)
* 함수 표현식에서 함수의 이름을 지정할 수 있으며, 함수내에서 자신을 참조하는데 사용되거나, 디버거 내 스택 추적에서 함수를 식별하는데 사용될 수 있음.
* 함수를 다른 함수의 매개변수로 전달할 때 편리
```
// 익명함수
var test = function(parameter) {
    return false;
}
var x = test(parameter);

// 이름 지정 함수
var test2 = function nameFunc(parameter) {
    return false;
}

// 다른 함수를 매개변수로 전달
function test3(test) {
    return false;
}
```


#### + 참고
* Javascript에서 함수는 조건에 의해 정의 가능
* 메서드(method): 객체내의 한 속성이 함수인 경우
* 함수 호이스팅은 오직 함수 선언과 함께 작동하고, 함수 표현식에서는 동작하지 않음


<br>

### [ 참고자료 ]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)
* [w3schools](https://www.w3schools.com/js/)

<br/>
