var bntDecoder = document.getElementById('bnt')

var bntCodificar = document.getElementById('codificar')

var bntDecodificar = document.getElementById('decodificar')

var select = document.getElementById("select");

var divInputNumber = document.getElementById('divInputNumber');

var resultado = document.querySelector('#mensagemCodificada');

var textoUsuario = document.querySelector('#textoUsuario');

var optioncifra = document.querySelector('#cifra')

var optionbase = document.querySelector('#base')

var incremento = document.querySelector('#inputNumber');



bntCodificar.addEventListener("change", function(){
    bntDecoder.value = "codificar"
})

bntDecodificar.addEventListener("change", function(){
    bntDecoder.value = "decodificar"
})

select.addEventListener('change', function(){
    if (select.value == "cifra"){
        divInputCifra.style.display = 'block'
    }else{
        divInputCifra.style.display = 'none'
    }
  } )

  
bntDecoder.addEventListener("click", function(e){
    e.preventDefault();
    if(bntCodificar.checked && select.value == "base64"){
        var textoAplicado = document.getElementById('textoUsuario').value
        var textoCodificado = btoa(textoAplicado)
        resultado.innerHTML = `${textoCodificado}`

    }
})


bntDecoder.addEventListener("click", function(e){
    e.preventDefault();
    if(bntDecodificar.checked && select.value == "base64"){
        var textoAplicado = document.getElementById('textoUsuario').value
        var textoCodificado = atob(textoAplicado)
        resultado.innerHTML = `${textoCodificado}`

    }
})