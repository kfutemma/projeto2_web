
function colocarEstadoNaLista(){

     for (var i = 0; i < estados.length; i++){

          var option = document.createElement("option");
          option.innerText = estados[i].sigla ;
          option.value = '"' + estados[i].nome + '"';

          document.getElementById('estadoID').appendChild(option);
     }
     carregarCidades();
}

function carregarCidades(){
     var selecao = document.getElementById('estadoID').value;
     document.getElementById("cidadeID").innerHTML = "";

     for (var i = 0; i < estados.length; i++){
          var aspas = ('"'+ estados[i].nome +'"');
          if(aspas == selecao){
               for (var j = 0; j < estados[i].cidades.length; j++) {
                    var option = document.createElement("option");
                    option.innerText = estados[i].cidades[j];

                    document.getElementById('cidadeID').appendChild(option);
               }
               break;
          } 
     }
}

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
     }
}

function validarIdade() {
     var idade = document.getElementById("dataNasc").value.substring(0, 4);
     var ano = new Date().getFullYear();
     idade = ano - idade;

     if (idade <= 18){
          alert("Idade inválida");
     }
}

/*
function getCidades(){
     var estadosaaa = document;

     var xhr = new XMLHttpRequest();
     xhr.open("POST", "#", true);

     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

     xhr.send("estado"+estado);
     xhr.onreadystatechange = function(){
          if (xhr.readyState == 4 && xhr.status == 200) {
               document.getElementById()
          }
     }
}

*/
$(document).ready(function(){
     $('#btn-cadastrar').click(function(){

     var nome = $('#nome').val();
     var sexo = $('#sexo').val();
     var dataNasc = $('#dataNasc').val();
     var rua = $('#rua').val();
     var numero = $('#numero').val();
     var bairro = $('#bairro').val();
     var estado = $('#estado').val();
     var cidade = $('#cidade').val();
     var cpf = $('#cpf').val();
     var cadjus = $('#cadjus').val();
     var email = $('#email').val();
     var senha = $('#senha').val();

     console.log(nome);

    $.ajax({
          type: 'POST',
          url:"http://andrebordignon.esy.es/php/incluicandidato.php",
          data:{nome:nome, sexo:sexo,dataNasc:dataNasc,rua:rua,numero:numero,
                bairro:bairro, estado:estado, cidade:cidade, cpf:cpf, cadjus:cadjus,
                email:email, senha:senha},
          dataType: "json",
          success:function(data, status, jqXHR){
               console.log(data, status, jqXHR);
               //html = "IMC ="+data.imc + " - " + data.mensagem;
               //$("#resultado").html(html);  
               }
          });
     })
});


// _____________________________________________________________________________________

// JSON COM TODAS AS CIDADES DO BRASIL

