'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var words = [];
  var num = [];

  function find(arrA, arrB, words, num) {
    for (var i = 0; i < arrA.length; i++) {
      for (var j = 0; j < arrB.value.length; j++) {
        if (arrA[i].key === arrB.value[j]) {
          words.push(arrA[i].key);
          num.push(arrA[i].count - parseInt(arrA[i].count / 3));
          break;
        }
      }
      if (j === arrB.value.length) {
        words.push(arrA[i].key);
        num.push(arrA[i].count)
      }
    }
  }

  find(collectionA, objectB, words, num);
  var answer = [];
  for (var k = 0; k < words.length; k++) {
    answer.push({key: words[k], count: num[k]});
  }
  return answer;
}
