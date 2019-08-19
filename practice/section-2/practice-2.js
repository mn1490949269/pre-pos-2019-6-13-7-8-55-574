'use strict';

function countSameElements(collection) {
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

  var words = [];

  var num = [];

  search(collection, words, num);
  var answer = [];
  for (var j = 0; j < words.length; j++) {
    answer.push({key: words[j], count: num[j]});
  }
  return answer;
}
