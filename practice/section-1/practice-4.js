'use strict';

function collectSameElements(collectionA, objectB) {
  var words = [];
  for (var i = 0 ; i < collectionA.length ; i ++) {
      for (var j =  0 ; j < objectB.value.length  ; j ++) {
          if (collectionA[i].key === objectB.value[j]) {
            words.push(objectB.value[j]);
          }
      }
  }
  return words;
}
