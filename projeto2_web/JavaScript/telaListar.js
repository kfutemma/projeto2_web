

$(document).ready(function(){
	carregarCandidatos();




$("#myBtn").click(function(){
        console.log("clicou");
         $("#myModal").modal("show");
    });
});

function carregarCandidatos(){
    $.get("http://andrebordignon.esy.es/php/consultacandidatos.php", function(data1, status){
      console.log(JSON.parse(data1));
      var tabelaDados = "";
      var data = JSON.parse(data1);
      for (let index = 0; index < data.length; index++) {
        var excluirCandidato = '<button onClick="excluirCandidato('+data[index].idcandidato+')" class="btn btn-danger">Remover</button>';

        if(data[index].nome == null){
            data[index].nome = ".";
        }
        if(data[index].sexo == null){
            data[index].sexo = ".";
        }
        if(data[index].cidade == null){
            data[index].cidade = ".";
        }
        if(data[index].estado  == null){
          data[index].estado = ".";
        }
        if(data[index].email == null){
          data[index].email = ".";
        }
        if(data[index].cpf == null){
          data[index].cpf = ".";
        }
        if(data[index].datanasc == null){
          data[index].datanasc = ".";
        }
        if(data[index].rua == null){
          data[index].rua = ".";
        }
        if(data[index].numero == null){
          data[index].numero = ".";
        }
        if(data[index].senha == null){
          data[index].senha = ".";
        }
        if(data[index].cadjus == null){
          data[index].cadjus = ".";
        }


        var editarCandidato = '<button onClick="editarCandidato('+data[index].idcandidato+','+ data[index].nome +','+data[index].sexo+','+data[index].cidade+','+
                                                                 +','+ data[index].estado +','+data[index].email+','+data[index].cpf+','+data[index].datanasc+','+
                                                                 data[index].rua+','+data[index].numero+','+data[index].senha+','+data[index].cadjus+')" class="btn btn-warning">Editar</button>';
        console.log(excluirCandidato);
        console.log(editarCandidato);
        tabelaDados += '<tr>' +'<td>'+ data[index].idcandidato + '</td>' + '<td>'+ data[index].nome + '</td>' + '<td>'+ data[index].sexo + 
                       '</td>' + '<td>'+ data[index].cidade + '</td>'+ '<td>'+ data[index].estado + '</td>' + '<td>'+ data[index].email +
                       '</td>' + '<td>'+ data[index].cpf + '</td>' + '<td>'+ excluirCandidato + '</td>' + '<td>'+ editarCandidato + '</td>' +'</tr>';                       
        
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

function editarCandidato(idcandidato, nome, sexo, cidade, estado, email, cpf, dataNasc,rua,numero,senha, cadjus){

    var link = 'http://andrebordignon.esy.es/php/atualizacandidato.php?idcandidato='+ idcandidato + '&nome='+nome +'&sexo='+sexo+'&datanasc='+datanasc+'&rua='+rua+'&numero'+numero+'&cpf='+cpf+'cadjus='+cadjus+'&email='+email+'&senha='+ senha;

    $.ajax({
            url: link,
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

