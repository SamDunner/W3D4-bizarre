


function bizarreSort(arr) {
  for (num of arr) {
    (function () {
      var j = num;
      setTimeout(function() { console.log(j); }, 10 * j);
    })
    ();
  }
}


// for (var i = 0; i < 3; i++) {
//   function g(){
//     var j = i;
//     setTimeout(function f() {console.log(j)}, 1000 * i);
//   }
//   g();


// for loop
// setTimeout
// console.log



bizarreSort([77, 1, 60, 33, 76, 600, 0, 5])