'use strict';

function countSameElements(collection) {

  var words = [];

  var num = [];
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
          count.push(Number(arr[i].match(/\d+/)));
        }
        else {
          count[position] += Number(arr[i].match(/\d+/));
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

  function answer() {
    var answer = [];
    for (var j = 0; j < words.length; j++) {
      answer.push({name: words[j], summary: num[j]});
    }
    return answer;
  }
  search(collection, words, num);

  return answer();
}
