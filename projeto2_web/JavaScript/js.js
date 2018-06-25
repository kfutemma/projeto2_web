$(document).ready(function(){

    $('#btn-cadastrar').click(function(){

     var nome = $('#nome').val();
     var sexo = $('#sexo').val();
     var dataNasc = $('#dataNasc').val();
     var rua = $('#rua').val();
     var numero = $('#numero').val();
     var bairro = $('#bairro').val();
     var estado = $('#estadoID option:selected').text();
     var cidade = $('#cidadeID option:selected').text();
     var cpf = $('#cpf').val();
     var cadjus = $('#cadjus').val();
     var email = $('#email').val();
     var senha = $('#senha').val();

     console.log(nome);
     console.log(dataNasc);
     console.log(estado);
     console.log(cidade);

     if(validarCPF() == true && validarIdade()== true && validarNome()== true && validarNumero()== true){
      $.ajax({
        type: 'POST',
        url:"http://andrebordignon.esy.es/php/incluicandidato.php",
        data:{nome:nome, sexo:sexo,dataNasc:dataNasc,rua:rua,numero:numero,
              bairro:bairro, estado:estado, cidade:cidade, cpf:cpf, cadjus:cadjus,
              email:email, senha:senha},
          success:function(data, status, jqXHR){
              alert(data);
              $('#nome').val("");
              $('#sexo').val("");
              $('#dataNasc').val("");
              $('#rua').val("");
              $('#numero').val("");
              $('#bairro').val("");
              $('#cpf').val("");
              $('#cadjus').val("");
              $('#email').val("");
              $('#senha').val("");
              console.log(data);
          },
          error: function(data){
              console.log(data.responseText);
          } 
      });
     }
  })
});