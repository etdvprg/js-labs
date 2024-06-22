var int1 = Number(prompt('Int1:'))
var int2 = Number(prompt('Int2:'))
var int3 = Number(prompt('Int3:'))
var arInt = [int1, int2, int3]
alert("Sorted Numbers: " + arInt.sort(function(a, b) {return a - b; }))