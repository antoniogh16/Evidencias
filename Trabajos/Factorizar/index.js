var div = document.querySelector('#res');
var num = document.querySelector('#fin');

num.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        var res = 1;
        var fac = 1;
        div.innerHTML = '';
        
        for(var i = 1; i <= parseInt(num.value); i++){
            fac = fac * i;  
        }
        res = fac; // Corregir aquí, asignar fac a res
        div.innerHTML = res;
    }
});
