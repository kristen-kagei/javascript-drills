//if given an array, look for max, min, and average and display in an object

function maxObj(arr){
  var final = {};
  
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  
  for(var i=1; i<arr.length; i++){
    if(arr[i]>arr[0]){
      max = arr[i]
    }
    else if(arr[i]<arr[0]){
      min = arr[i]
    }
    sum = sum + arr[i];
    var avg = sum / arr.length; 
  }
  final = {minimum: min, maximum: max, average: avg};
  console.log(final); 
  return(final);
}

maxObj([3,5,6,9,8,7,2,-1]);
  