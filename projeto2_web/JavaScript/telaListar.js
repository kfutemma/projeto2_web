$(document).ready(function(){
	carregarCandidatos();
});

function carregarCandidatos(){
    $.get("http://andrebordignon.esy.es/php/consultacandidatos.php", function(data1, status){
      console.log(JSON.parse(data1));
      var tabelaDados = "";
      var data = JSON.parse(data1);
      for (let index = 0; index < data.length; index++) {
        tabelaDados += '<tr>' +'<td>'+ data[index].idcandidato + '</td>' + '<td>'+ data[index].nome + '</td>' + '<td>'+ data[index].sexo + '</td>' + '<td>'+ data[index].cidade + '</td>'+
                       '<td>'+ data[index].estado + '</td>' + '<td>'+ data[index].email + '</td>' + '<td>'+ data[index].cpf + '</td>' + '</tr>';                       
        
      }

      $('#listagem').html(tabelaDados);
        
      });
}