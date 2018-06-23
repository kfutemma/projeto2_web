

$(document).ready(function(){
	carregarCandidatos();
});

function carregarCandidatos(){
    $.get("http://andrebordignon.esy.es/php/consultacandidatos.php", function(data1, status){
      console.log(JSON.parse(data1));
      var tabelaDados = "";
      var data = JSON.parse(data1);
      for (let index = 0; index < data.length; index++) {
        var excluirCandidato = '<button onClick="excluirCandidato('+data[index].idcandidato+')" class="btn btn-danger">Remover</button>';
        console.log(excluirCandidato);
        tabelaDados += '<tr>' +'<td>'+ data[index].idcandidato + '</td>' + '<td>'+ data[index].nome + '</td>' + '<td>'+ data[index].sexo + 
                       '</td>' + '<td>'+ data[index].cidade + '</td>'+ '<td>'+ data[index].estado + '</td>' + '<td>'+ data[index].email +
                       '</td>' + '<td>'+ data[index].cpf + '</td>' + '<td>'+ excluirCandidato + '</td>' + '</tr>';                       
        
      }

      $('#listagem').html(tabelaDados);
        
      });
}

function excluirCandidato(idcandidato){
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