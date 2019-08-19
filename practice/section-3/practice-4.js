'use strict';

function createUpdatedCollection(collectionA, objectB) {
  function find(arr, word) {
    var ret = -1;
    for (var i = 0; i < arr.length; i++) {
      if (word === arr[i]) {
        ret = i;
      }
    }
    return ret;
  }

  function search(arr, word, count) {
    for (var i = 0; i < arr.length; i++) {
      var position = find(word, arr[i][0]);
      if (arr[i].length != 1) {
        if (position === -1) {
          word.push(arr[i][0]);
          count.push(Number(arr[i][2]));
        }
        else {
          count[position] += Number(arr[i][2]);
        }
      }
      else {
        if (position === -1) {
          word.push(arr[i]);
          count.push(1);
        }
        else {
          count[position]++;
        }
      }
    }
  }

  function getarrC() {
    var answer = [];
    for (var j = 0; j < words.length; j++) {
      answer.push({key: words[j], count: num[j]});
    }
    return answer;
  }

  function output() {
    var answer = [];
    for (var k = 0; k < words1.length; k++) {
      answer.push({key: words1[k], count: num1[k]});
    }
    return answer;
  }

  function match(arrC, objectB, words1, num1) {
    for (var i = 0; i < arrC.length; i++) {
      for (var j = 0; j < objectB.value.length; j++) {
        if (arrC[i].key === objectB.value[j]) {
          words1.push(arrC[i].key);
          num1.push(arrC[i].count - parseInt(arrC[i].count / 3));
          break;
        }
      }
      if (j === objectB.value.length) {
        words1.push(arrC[i].key);
        num1.push(arrC[i].count);
      }
    }
  }

  var words = [];

  var num = [];
  var arrC = [];


  var words1 = [];

  var num1 = [];
  search(collectionA, words, num);
  arrC = getarrC();
  match(arrC, objectB, words1, num1);
  return output();
}
