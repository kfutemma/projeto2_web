function TestaCPF() {
    
    var strCPF = document.getElementById("cpf").value;
    var Soma;
    var Resto;
    Soma = 0;
     if (strCPF == "00000000000") return false;
    
     for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
     Resto = (Soma * 10) % 11;
     
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
     
     Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
     
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    console.log("rodou");
    return true;
}


function validarCPF() {
     if (!TestaCPF()){
          alert("CPF inválido!");
          return false;
     }
     return true;
}

function validarIdade() {
     var idade = document.getElementById("dataNasc").value.substring(0, 4);
     var ano = new Date().getFullYear();
     idade = ano - idade;

     if (idade <= 18){
          alert("Idade inválida");
          return false;
     }
     return true;
}

function validarNome() {
  var nome = document.getElementById("nome").value;

  if (nome.length >= 255){
       alert("Nome inválido");
       return false;
  }
  return true;
}

function validarNumero() {
    var cadJus = document.getElementById("numero").value;
    cadJus = cadJus.parseInt
    if (cadJus < 0 && cadJus > 5000){
         alert("Nº do candidato inválido");
         return false;
    }
    return true;
  }


  
