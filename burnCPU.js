/**
* Use this script to burn cpu and try out CPU profiling. 
*
*  slc run --cluster <n> burnCPU.js
*
*/

var math = require('mathjs');

var interval = 5

function processImage() {
  setInterval(function() {
    math.round(math.e, 3);
    math.atan2(3, -3) / math.pi;      
    math.log(100000000000000, 10);             
    math.sqrt(-4444444444444444); 
    math.pow([[-1, 2], [3, 1]], 2);

    math.eval('1111111111111111.2 * (2111111111111111 + 4111111111111.5)');     
    math.eval('5.08 cm to inch');     
    math.eval('sin(45 deg) ^ 2'); 
    math.eval('999999999999999999999999 / 3 + 2i');          
    math.eval('det([-1, 2; 3, 1])');

    math.select(33333333333333333333333)
      .add(4444444444444444444)
      .multiply(222222222222222222222)
      .done(); 
  }, interval);
}

processImage();
