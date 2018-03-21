//take key value pairs in a given hashmap and invert them

function invertHash(assArr){
    var arr1 = [];
    var arr2 = [];
    for(var i in assArr){
      arr1.push(i);
      arr2.push(assArr[i]);
    }
    var inverse = {};
    var j=0;
    var k=0;
    while(j<arr1.length && k<arr2.length){
      inverse[arr2[k]] = arr1[j];
      j++;
      k++;
    }
    console.log(inverse);
  }
  
  invertHash({"cat": "dog", "deep": "creep", "party": "zuckerburg's"});
      