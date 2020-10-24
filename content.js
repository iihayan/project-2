var elements = document.getElementsByTagName('p');

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   //console.log ( element );
   //element.style.setProperty('border','solid 1px red');

   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*100);
   var b = Math.floor(Math.random()*100);
   var c = "rgb(" + r + "," + g + "," + b + ")";

   element.style.setProperty('background-color',c);

}
