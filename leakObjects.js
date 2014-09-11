/**
* Use this script to burn cpu and try out CPU profiling. 
* 
*  slc run --cluster <n> leakObjects.js
* 
*/

function Paris() {
}

function addObjects() {

  var paris= []
  setInterval(function() {
    for (var i=0; i < 100; i++) {  
      paris.push(new Paris);
    }
  }, 1000);
}

addObjects();
