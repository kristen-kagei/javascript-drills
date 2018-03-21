//if given two arrays, return an object that maps key and value pairs (keys from first array, values from second)

function zipMap(arr1, arr2) {
  var zipper = {};
  if(arr1.length === arr2.length){
    var i = 0; 
    var j = 0;
    while(i<arr1.length && j<arr2.length){
        zipper[arr1[i]] = arr2[j];
        i++;
        j++;
    }
  }
  console.log(zipper);
  return zipper; 
}

zipMap(["abc","def","ghi"],["yas", "yaaas", "yaaaas"]);