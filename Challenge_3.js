// Count odd numbers between low and high

var low = 3;
var high = 7;

var total = 0;

for (i=low; i<high+1; i++) {
  if ( i%2!=0 ) {
  total++;
  }
}
console.log(total);
