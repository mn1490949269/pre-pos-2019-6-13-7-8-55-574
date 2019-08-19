'use strict';

function collectSameElements(collectionA, collectionB) {
  var words = [];
  var word ;
  var k = 0 ;
  for (var i = 0 ; i < collectionA.length ; i ++) {
    word = collectionA[i] ;
    for (var j = 0 ; j < collectionB.length ; j++) {
      if(word === collectionB[j]) {
        words[k] = word ;
        k++ ;
      }

    }
  }

  return words;
}
