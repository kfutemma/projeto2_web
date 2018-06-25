function TestaCPF(strCPF) {
    
    var Soma;
    var Resto;
    Soma = 0;
     if (strCPF == "00000000000") return false;
     if (strCPF == "") return false;
    
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


function validarCPF(cpf) {
     if (!TestaCPF(cpf)){
        if ($("#cpf").parent().next(".validation").length == 0){
                $("#cpf").parent().after("<div class='validation'>CPF inválido</div>");
                return false;
        } 
     }
     $("#cpf").parent().next(".validation").remove();
     return true;
}

function validarIdade(idade) {

    if(idade == "0000-00-00"){
      if ($("#dataNasc").parent().next(".validation").length == 0){
                $("#dataNasc").parent().after("<div class='validation'>Data de nascimento inválida</div>");
                return false;
        } 
    }


     var ano = new Date().getFullYear();
     idade = ano - idade.substring(0, 4);

     if (idade <= 18){
          if ($("#dataNasc").parent().next(".validation").length == 0){
                $("#dataNasc").parent().after("<div class='validation'>Nome inválido</div>");
                return false;
        } 
     }
     $("#dataNasc").parent().next(".validation").remove();
     return true;
}

function validarNome(nome) {

  if(nome == ""){
      if ($("#nome").parent().next(".validation").length == 0){
                $("#nome").parent().after("<div class='validation'>Nome inválido</div>");
                return false;
        } 
    }

  if (nome.length >= 255){
       if ($("#nome").parent().next(".validation").length == 0){
                $("#nome").parent().after("<div class='validation'>Nome inválido</div>");
                return false;
        } 
  }
  $("#nome").parent().next(".validation").remove();
  return true;
}

function validarCad(cadjus) {  
    
    if(cadjus == ""){
      if ($("#cadjus").parent().next(".validation").length == 0){
                $("#cadjus").parent().after("<div class='validation'>Nº do candidato inválido</div>");
                return false;
        } 
    }
    var aux = parseInt(cadjus);

    if (aux > 5000){
        console.log(aux);
        //setCustomValidity("Nº do candidato inválido");

        if ($("#cadjus").parent().next(".validation").length == 0){
                $("#cadjus").parent().after("<div class='validation'>Nº do candidato inválido</div>");
                return false;
        } 
    }
    else if(aux <= 0){
        console.log(aux);
        if ($("#cadjus").parent().next(".validation").length == 0){
              $("#cadjus").parent().after("<div class='validation'>Nº do candidato inválido</div>");
              return false;
        } 
    }
    else if(aux == ""){
      if ($("#cadjus").parent().next(".validation").length == 0){
              $("#cadjus").parent().after("<div class='validation'>Nº do candidato inválido</div>");
              return false;
        } 
    }
    $("#cadjus").parent().next(".validation").remove();
    return true;
  }


  
