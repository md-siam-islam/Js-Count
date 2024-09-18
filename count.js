let sum = 0 ;

document.getElementById('plus-btn').addEventListener('click', function(){

 let h1 = document.getElementById('count');

 sum +=1;
h1.innerText = sum;

})
document.getElementById('minus-btn').addEventListener('click', function(){

 let h1 = document.getElementById('count');

 sum -=1;
h1.innerText = sum;

})