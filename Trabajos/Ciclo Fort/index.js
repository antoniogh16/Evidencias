var div = document.querySelector('#res');
/*for(var i=1; i<=100; i++){
    //console.log(1);
    div.innerHTML += 1+ '<vr> ';
    //div.innerHTML = div.innerHTML + i;
} */

var fin = document.querySelector('#fin');
fin.addEventListener('keypress', function(event){
    
    if(event.charCode ==13){
    
    div.innerHTML = '';
    for(var i=1; i<=fin.value; i++){
        div.innerHTML += i+('<br>');
    }
    }
});