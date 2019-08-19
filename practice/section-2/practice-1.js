'use strict';

function countSameElements(collection) {
  var words = [];
  var num = [];
  var ret ;
  function find(arr,words) {
    var ret = -1 ;
    for (var i = 0 ; i < arr.length ; i ++) {
        if (words === arr[i]) {
          ret = i ;
        }
    }
    return ret ;
  }
  for (var i = 0 ; i < collection.length ; i ++) {
    ret = find(words,collection[i]);
    if (ret === -1) {
      words.push(collection[i]);
      num.push(1);
    }

  else
    num[ret]++ ;
  }
  var answer = [];
  for (var j = 0 ; j < words.length ;j ++) {
    answer.push({key: words[j], count: num[j]},);
  }
  return answer ;
}
