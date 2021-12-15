var bntDecoder = document.getElementById('bnt')

var bntCodificar = document.getElementById('codificar')

var bntDecodificar = document.getElementById('decodificar')

var select = document.getElementById("select");

var divInputNumber = document.getElementById('divInputNumber');

var resultado = document.querySelector('#mensagemCodificada');

var textoUsuario = document.querySelector('#textoUsuario');

let alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-_";

function codCesar(){
    var textMessage = document.getElementById('textoUsuario').value
    console.log(textMessage)
    var incremento = document.querySelector('#inputNumber').value;
    console.log(incremento)
    var textCripto = ""
    for (var i = 0; i < textMessage.length; i++) {
        for (var j = 0; j < alphabet.length; j++){
          if (textMessage[i] == alphabet[j]) {
            textCripto += alphabet[j + parseInt(incremento)];
            break;
          } else if (textMessage[i] == " ") {
            textCripto += " ";
            break;
          }
    }
        
}
        return textCripto
}

function decodCesar(){
    var textMessage = document.getElementById('textoUsuario').value
    console.log(textMessage)
    var incremento = document.querySelector('#inputNumber').value;
    console.log(incremento)
    var textCripto = ""
    for (var i = 0; i < textMessage.length; i++) {
        for (var j = alphabet.length; j > 0; j--){
          if (textMessage[i] == alphabet[j]) {
            textCripto += alphabet[j - parseInt(incremento)];
            break;
          } else if (textMessage[i] == " ") {
            textCripto += " ";
            break;
          }
    }
        
}
        return textCripto
}



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
    if(bntCodificar.checked){
        if(select.value == "base64"){
            var textoAplicado = document.getElementById('textoUsuario').value
            var textoCodificado = btoa(textoAplicado)
            resultado.value = textoCodificado
        } else{
            
            var textoCodificado = codCesar(textoAplicado)
            resultado.value = textoCodificado
       }

    } else{
        if(select.value == "base64"){
            var textoAplicado = document.getElementById('textoUsuario').value
            var textoCodificado = atob(textoAplicado)
            resultado.value = textoCodificado
        } else{
            var textoCodificado = decodCesar()
            resultado.value = textoCodificado

        }
    } 
    
})

