//return # of values in an object w/o using .length

function noVal(assArr){
  var count = 0; 
  for(var key in assArr){
    count++; 
  }
  console.log(count);
  return(count); 
}

noVal({time: "7:42", coffee: "yes", snowday: "hopefully"});