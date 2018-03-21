//if given a number of cents, find the right configuration of change.

function centConfig(givenCents){
  
  var assArr = {};
  var q = givenCents % 25; 
  var quarter = givenCents/25;   
  
  if (q === 0) {
    var assArr = {quarters: quarter};
  }
  else if (q !== 0) {
    quarter = Math.floor(quarter);
    var d = q % 10;
    var dime = q / 10;
    if (d === 0) { 
      var assArr = {quarters: quarter, dimes: dime};
    } 
    else if (d !== 0) {
      dime = Math.floor(dime); 
      var n = d % 5; 
      var nickel = d / 5; 
      if (n === 0) {
        var assArr = {quarters: quarter, dimes: dime, nickels: nickel};
      }
      else if (n !== 0) {
        nickel = Math.floor(nickel);
        var p = n % 1; 
        var penny = n / 1; 
        if (p === 0) {
          var assArr = {quarters: quarter, dimes: dime, nickels: nickel, pennies: penny};
        }
      }
    }
  }
  console.log(assArr);
  return assArr; 
}

centConfig(99);

    
    
    