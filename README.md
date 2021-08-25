# Scientific Calculator <img src="https://img.shields.io/badge/project-completed-brightgreen">

<img src="https://img.shields.io/badge/HTML-brightgreen"> <img src="https://img.shields.io/badge/css-brightgreen"> <img src="https://img.shields.io/badge/JavaScript-brightgreen"> <img src="https://img.shields.io/badge/NetBeans-brightgreen"> <img src="https://img.shields.io/badge/Glassfish-v4.1-brightgreen">

https://sneha2245.github.io/scientific-calculator/

Duration
--------

3 month.

Technologies / Tools Used
-------------------------

HTML, CSS, JavaScript, NetBeans , Glassfish .

Description
-----------

   __i.__	We have build a user friendly of a scientific calculator . The interface have a display and various buttons like sin, cos , numbers , operations etc.
  
   __ii.__	There is a button named inverse which is used to show inverse of some buttons like __`ln`__ to <img src="https://latex.codecogs.com/svg.image?e^{x}" title="e^{x}" /> , __`sin`__ to <img src="https://latex.codecogs.com/svg.image?sin^{-1}" title="sin^{-1}" /> , __`π`__ to __`2π`__ and many more.
    
Code
----

We used __`inverse`__ button to display other buttons by using : 

```html 
<span class="buttonNormal" id="inv" onclick="inv();">Inv</span> 
```
```javascript
function inv() {
  document.getElementById('invStat').checked = !document.getElementById('invStat').checked;
  if (document.getElementById('invStat').checked) {
    document.getElementById('inv').style.backgroundColor = "#fff8a2";
    document.getElementById('ex').innerHTML = "e" + "<sup>x</sup>";
    document.getElementById('frac').innerHTML = "Frac";
    document.getElementById('sin').innerHTML = "sin" + "<sup>-1</sup>";
    document.getElementById('pi').innerHTML = "2π"; ...
  } else {
    document.getElementById('inv').style.backgroundColor = "#cccccc";
    document.getElementById('ex').innerHTML = "ln";
    document.getElementById('frac').innerHTML = "Int";
    document.getElementById('sin').innerHTML = "sin";
    document.getElementById('pi').innerHTML = "π"; ...
  }
}
```

Features
--------

Display date and time . 

Team Members
------------

https://github.com/subirghosh77 , https://github.com/sneha2245/ , https://github.com/arnabseal
