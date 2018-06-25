  

$(document).ready(function(){
	carregarCandidatos();
});

function carregarCandidatos(){
    $.get("http://andrebordignon.esy.es/php/consultacandidatos.php", function(data1, status){
      console.log(JSON.parse(data1));
      var tabelaDados = "";
      var data = JSON.parse(data1);
      for (let index = 0; index < data.length; index++) {

        var id= index;

        var excluirCandidato = '<button onClick="excluirCandidato('+data[index].idcandidato+')" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></button>';

        var editarCandidato = '<button onClick="editarCandidato('+id+')" class="btn btn-default openmodal"><span class="glyphicon glyphicon-pencil"></span></button>';

        console.log(editarCandidato);
        
        tabelaDados += '<tr>' +
                              '<td id=id'+id+'>'+ data[index].idcandidato + '</td>' + '<td id=nome'+id+'>'+ data[index].nome + '</td>' + '<td id=sexo'+id+'>'+ data[index].sexo + 
                              '</td>' + '<td id=cidade'+id+'>'+ data[index].cidade + '</td>'+ '<td id=estado'+id+'>'+ data[index].estado + '</td>' + 
                              '<td id=rua'+id+'>'+ data[index].rua + '</td>' + '<td id=numero'+id+'>'+ data[index].numero + '</td>' + '<td id=email'+id+'>'+ data[index].email +
                              '</td>' + '<td id=cpf'+id+'>'+ data[index].cpf + '</td>' + '<td id=cadjus'+id+'>'+ data[index].cadjus + '</td>' + '<td id=dataNasc'+id+'>'+ data[index].datanasc + '</td>'+ 
                              '<td>'+ editarCandidato + '</td>' + '<td>'+ excluirCandidato + '</td>'+
                       '</tr>';                       
        
      }

      $('#listagem').html(tabelaDados);
        
      });
}

function excluirCandidato(idcandidato){

    var r = confirm("Deseja excluir esse candidato?");

    if(r == true){

      var idRemover = 'http://andrebordignon.esy.es/php/deletacandidato.php?idcandidato='+ idcandidato;
      console.log(idRemover);

          $.ajax({
            url: idRemover,
              success:function(data){
                alert(data);
                  console.log(data);
                  location.reload();
              },
              error: function(data){
                console.log(data);
                alert(data);
              }   
          });
    }
}


function editarCandidato(id){

    $('#nome').val($('#nome'+id).text());
    $('#sexo').val($('#sexo'+id).text());
    $('#dataNasc').val($('#dataNasc'+id).text());
    $('#rua').val($('#rua'+id).text());
    $('#numero').val($('#numero'+id).text());
    $('#estado').val($('#estado'+id).text());
    $('#cidade').val($('#cidade'+id).text());
    $('#cpf').val($('#cpf'+id).text());
    $('#cadjus').val($('#cadjus'+id).text());
    $('#email').val($('#email'+id).text());
    $('#senha').val();

    
    $("#myModal").modal("show");
    
    

    
    $('#salvar').click(function() {
        var idcandidato = $('#id'+id).text();
        var nome = $('#nome').val();
        var sexo = $('#sexo').val();
        var dataNasc = $('#dataNasc').val();
        var rua = $('#rua').val();
        var numero = $('#numero').val();
        var estado = $('#estadoID option:selected').text();
        var cidade = $('#cidadeID option:selected').text();
        var cpf = $('#cpf').val();
        var cadjus = $('#cadjus').val();
        var email = $('#email').val();

        $.ajax({
          type: 'POST',
          url:'http://andrebordignon.esy.es/php/atualizacandidato.php',
          data:{idcandidato:idcandidato,nome:nome, sexo:sexo,dataNasc:dataNasc,rua:rua,
                numero:numero,estado:estado, cidade:cidade, cpf:cpf, cadjus:cadjus,
                email:email},
          success:function(data, status, jqXHR){
              alert(data);
              console.log(data);
              location.reload();
          },
          error: function(data){
              console.log(data);
          } 
      });
    });
}