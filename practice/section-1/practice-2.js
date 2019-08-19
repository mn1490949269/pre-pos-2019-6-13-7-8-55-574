'use strict';

function collectSameElements(collectionA, collectionB) {
  var words = [];

  function find(arrA , arrB , arrC) {
    var word;
    for (var i = 0; i < arrA.length; i++) {
      for (var k = 0; k < arrB.length; k++)
        for (var j = 0; j < arrB[k].length; j++) {
          if (arrA[i] === arrB[k][j]) {
            arrC.push(arrA[i]);
          }
        }
    }
  }

  find(collectionA,collectionB,words);
  return words;
}
